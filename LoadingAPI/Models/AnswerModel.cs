using LoadingAPI.Interfaces;

namespace LoadingAPI.Models
{
    public class AnswerModel : IAnswer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; } //FK
        public int AnswerText { get; set; }
        public bool IsChosen { get; set; }
        public int AffectedStatId { get; set; } //FK
        public int NextQuestion { get; set; }
	}
}