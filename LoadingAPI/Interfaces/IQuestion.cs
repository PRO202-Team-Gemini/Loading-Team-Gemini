namespace LoadingAPI.Interfaces
{
public interface IQuestion
{
    int Id { get; set; }
    string QuestionText { get; set; }
    int AnswerAmount { get; set; }
}   }