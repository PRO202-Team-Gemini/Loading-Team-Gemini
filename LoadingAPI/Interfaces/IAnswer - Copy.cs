namespace LoadingAPI.Interfaces
{
    public interface IAnswerStat
    {
        public int? Id { get; set; }
        public int VoteOption1 { get; set; }
        public int VoteOption2 { get; set; }
        public int VoteOption3 { get; set; }
        public int VoteOption4 { get; set; }
    }
}