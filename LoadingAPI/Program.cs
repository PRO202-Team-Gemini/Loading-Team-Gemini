using Microsoft.EntityFrameworkCore;
using LoadingAPI.Contexts;
using LoadingAPI.Models;
using LoadingAPI.Entities;
using LoadingAPI.Admin;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<LoadingContext>
(options => options.UseSqlite("Data Source=Databases/LoadingDb.db"));

builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAll",
        policies => policies
        .AllowAnyMethod()
        .AllowAnyOrigin()
        .AllowAnyHeader()
        );
    }
);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

WebApplication app = builder.Build();
app.UseStaticFiles();
app.UseCors("AllowAll");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// ADDED to read from .xlsx and add to database
using (IServiceScope? serviceScope = app.Services.CreateScope())
{
    LoadingContext context = serviceScope.ServiceProvider.GetRequiredService<LoadingContext>();
    CsvReaderService csvReaderService = new();
    ConvertFromXlsToCsv converter = new();
    List<Question> previousQuestions = await context.Questions.ToListAsync();
    List<Answer> previousAnswers = await context.Answers.ToListAsync();
    List<CharacterStat> previousCharacterStats = await context.CharacterStat.ToListAsync();
    string filePath = "";

    //CLEAR DATABASE
    context.Questions.RemoveRange(previousQuestions);
    context.Database.ExecuteSqlRaw("DELETE FROM sqlite_sequence WHERE name = 'Questions';");
    context.Answers.RemoveRange(previousAnswers);
    context.Database.ExecuteSqlRaw("DELETE FROM sqlite_sequence WHERE name = 'Answers';");
    context.CharacterStat.RemoveRange(previousCharacterStats);
    context.Database.ExecuteSqlRaw("DELETE FROM sqlite_sequence WHERE name = 'CharacterStat';");
    await context.SaveChangesAsync();

    //QUESTIONS
    converter.Convert("questions.xlsx", "questions.csv");
    filePath = Path.Combine(Environment.CurrentDirectory, @"Admin\Datafiles", "questions.csv");
    List<QuestionModel> questionRecords = csvReaderService.ReadFromCsv<QuestionModel>(filePath);
    List<Question> questions = questionRecords.Select(q => new Question
    {
        QuestionText = q.QuestionText,
        AnswerAmount = q.AnswerAmount
    }).ToList();

    context.Questions.AddRange(questions);
    File.Delete(filePath);
    await context.SaveChangesAsync();

    //ANSWERS
    converter.Convert("answers.xlsx", "answers.csv");
    filePath = Path.Combine(Environment.CurrentDirectory, @"Admin\Datafiles", "answers.csv");
    List<AnswerModel> answerRecords = csvReaderService.ReadFromCsv<AnswerModel>(filePath);

    List<Answer> answers = answerRecords.Where(a => questions.Any(q => q.Id == a.QuestionId)).Select(a => new Answer
    {
        QuestionId = a.QuestionId,
        AnswerText = a.AnswerText,
        IsChosen = a.IsChosen,
        StatKeyId = a.AffectedStatId,
        NextQuestion = a.NextQuestion
    }).ToList();

    context.Answers.AddRange(answers);
    File.Delete(filePath);
    await context.SaveChangesAsync();

    //CHARACTER STATS
    converter.Convert("characterStat.xlsx", "characterStat.csv");
    filePath = Path.Combine(Environment.CurrentDirectory, @"Admin\Datafiles", "characterStat.csv");
    List<CharacterStatModel> characterStatRecords = csvReaderService.ReadFromCsv<CharacterStatModel>(filePath);

    List<CharacterStat> characterStats = characterStatRecords.Select(c => new CharacterStat
    {
        Name = c.Name,
        Level = c.Level,
        Attack = c.Attack,
        Strength = c.Strength,
        Health = c.Health,
        Expirience = c.Expirience
    }).ToList();

    context.CharacterStat.AddRange(characterStats);
    File.Delete(filePath);
    await context.SaveChangesAsync();
}

app.Run();