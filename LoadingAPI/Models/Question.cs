using LoadingAPI.Interfaces;

namespace LoadingAPI.Models
{
    public class Question : IQuestion 
    {
		public int Id { get; set; }
        public string QuestionText { get; set; }
        public int AnswerAmount { get; set; }
        public ICollection<AnswerStats>? AnswerStats { get; set; }
        public ICollection<Answers>? Answers { get; set; }
	}