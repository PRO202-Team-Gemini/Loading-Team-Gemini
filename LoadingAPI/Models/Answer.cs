using LoadingAPI.Interfaces;

namespace LoadingAPI.Models
{
    public class Answer : IAnswer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public int AnswerValue { get; set; }
        public int IsChosen { get; set; }
        public int NextQuestion { get; set; }
    }
}