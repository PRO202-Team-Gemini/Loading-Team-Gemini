namespace LoadingAPI.Interfaces
{
    public interface IAnswer
    {
        int Id { get; set; }
        int QuestionId { get; set; }
        int AnswerValue { get; set; }
        int IsChosen { get; set; }
        int NextQuestion { get; set; }
    }
}