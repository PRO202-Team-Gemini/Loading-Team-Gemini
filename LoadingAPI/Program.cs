using Microsoft.EntityFrameworkCore;
using LoadingAPI.Contexts;
using LoadingAPI.Models;
using LoadingAPI.Entities;
using LoadingAPI.Admin;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// Add services to the container.
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
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

WebApplication app = builder.Build();
app.UseStaticFiles();
app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
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
    string filePath = "";

    //QUESTIONS
    converter.Convert("questions.xlsx", "questions.csv");
    filePath = Path.Combine(Environment.CurrentDirectory, @"Admin\Datafiles", "questions.csv");
    List<QuestionModel> questionRecords = csvReaderService.ReadFromCsv<QuestionModel>(filePath);
    List<Question> questions = questionRecords.Select(q => new Question
    {
        QuestionText = q.QuestionText,
        AnswerAmount = q.AnswerAmount
    }).ToList();

    List<Question> previousQuestions = await context.Questions.ToListAsync();

    context.Questions.RemoveRange(previousQuestions);
    context.Questions.AddRange(questions);

    File.Delete(filePath);
    
        context.SaveChanges();

    //ANSWERS
    converter.Convert("answers.xlsx", "answers.csv");
    filePath = Path.Combine(Environment.CurrentDirectory, @"Admin\Datafiles", "answers.csv");
    List<AnswerModel> answerRecords = csvReaderService.ReadFromCsv<AnswerModel>(filePath);
    List<Answer> answers = answerRecords.Select(a => new Answer
    {
        QuestionId = a.QuestionId,
        AnswerText = a.AnswerText,
        IsChosen = a.IsChosen,
        StatKeyId = a.AffectedStatId,
        NextQuestion = a.NextQuestion
    }).ToList();

    List<Answer> previousAnswers = await context.Answers.ToListAsync();

    context.Answers.RemoveRange(previousAnswers);
    context.Answers.AddRange(answers);

    File.Delete(filePath);

    /*
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

    List<CharacterStat> previousCharacterStats = await context.CharacterStat.ToListAsync();

    context.CharacterStat.RemoveRange(previousCharacterStats);
    context.CharacterStat.AddRange(characterStats);

    File.Delete(filePath);
    */

    context.SaveChanges();
}

app.Run();