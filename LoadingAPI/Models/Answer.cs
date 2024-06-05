using LoadingAPI.Interfaces;

namespace LoadingAPI.Models
{
    public class Answer : IAnswer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; } //FK
        public Question? Question { get; set; }
        public int Answer { get; set; }
        public bool IsChosen { get; set; }
        public int AffectedStatId { get; set; } //FK
        public StatKey? StatKey { get; set; }
        public int NextQuestion { get; set; }
    }
}