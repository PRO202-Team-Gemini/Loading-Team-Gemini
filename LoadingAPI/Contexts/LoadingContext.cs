namespace LoadingAPI.Contexts;

using Microsoft.EntityFrameworkCore;
using LoadingAPI.Entities;

public class LoadingContext : DbContext
{
    public LoadingContext(DbContextOptions<LoadingContext> options) : base(options){}
    public DbSet<Answer> Answers { get; set; }
    public DbSet<AnswerStat> AnswerStat { get; set; }
    public DbSet<CharacterStat> CharacterStat { get; set; }
    public DbSet<Player> Players { get; set; }
    public DbSet<Question> Questions { get; set; }
    public DbSet<StatKey> StatKey { get; set; }
    
}