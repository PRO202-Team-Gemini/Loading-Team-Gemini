using LoadingAPI.Interfaces;

namespace LoadingAPI.Entities
{
    public class Answer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; } //FK
        public Question? Question { get; set; }
        public string AnswerText { get; set; }
        public bool IsChosen { get; set; }
        public int StatKeyId { get; set; } //FK
        public StatKey? StatKey { get; set; }
        public int NextQuestion { get; set; }
    }
}
