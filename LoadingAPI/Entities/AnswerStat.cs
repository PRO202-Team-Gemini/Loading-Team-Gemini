using LoadingAPI.Interfaces;

namespace LoadingAPI.Entities 
{
    public class AnswerStat 
    {
        public int? Id { get; set; }
        public int QuestionId { get; set; } //FK
        public Question? Question { get; set; }
        public int VoteOption1 { get; set; }
        public int VoteOption2 { get; set; }
        public int VoteOption3 { get; set; }
        public int VoteOption4 { get; set; }
    }
}