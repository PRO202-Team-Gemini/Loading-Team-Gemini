namespace LoadingAPI.Contexts;

using Microsoft.EntityFrameworkCore;
using LoadingAPI.Models;
public class LoadingContext : DbContext
{
    public LoadingContext(DbContextOptions<LoadingContext> options) : base(options){}
    public DbSet<Player> Players { get; set; }
    public DbSet<Question> Questions { get; set; }
    public DbSet<Answer> Answers { get; set; }
}