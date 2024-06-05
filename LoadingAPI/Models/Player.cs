
using LoadingAPI.Interfaces;
namespace LoadingAPI.Models
{
public class Player : IPlayer
{
    public int Id { get; set; }
    public string? Name { get; set; }

    public string? Avatar { get; set;}
}
}