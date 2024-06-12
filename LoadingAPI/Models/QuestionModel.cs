using LoadingAPI.Interfaces;

namespace LoadingAPI.Models
{
    public class QuestionModel : IQuestion 
    {
        public int? Id { get; set; } = null;
        public string? QuestionText { get; set; }
        public int AnswerAmount { get; set; }

	}
}