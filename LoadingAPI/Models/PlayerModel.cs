using LoadingAPI.Interfaces;

namespace LoadingAPI.Models
{
    public class PlayerModel : IPlayer
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Avatar { get; set;}
    }
}