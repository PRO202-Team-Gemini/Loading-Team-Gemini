namespace LoadingAPI.Interfaces
{
    // Player er user.
    public interface IPlayer
    {
        int Id { get; set; }
        string? Name { get; set; }
        string? Avatar { get; set; }
    }
}