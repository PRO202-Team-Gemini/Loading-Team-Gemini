using LoadingAPI.Interfaces;

namespace LoadingAPI.Entities 
{
    public class Question
    {
		public int Id { get; set; }
        public string QuestionText { get; set; }
        public int AnswerAmount { get; set; }
        public ICollection<AnswerStat>? AnswerStats { get; set; }
        public ICollection<Answer>? Answers { get; set; }
	}
}