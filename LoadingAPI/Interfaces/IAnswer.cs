namespace LoadingAPI.Interfaces
{
    public interface IAnswer
    {
        int Id { get; set; }
        int QuestionId { get; set; }
        int AnswerText { get; set; }
        bool IsChosen { get; set; }
        int NextQuestion { get; set; }
    }
}