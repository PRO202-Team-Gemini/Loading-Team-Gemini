namespace LoadingAPI.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LoadingAPI.Models;
using LoadingAPI.Contexts;


[ApiController]
[Route("api/[controller]")]
public class PlayersController : ControllerBase
{
// Deklarasjon av Context
    private readonly LoadingContext context;
// Intiere Context
    public PlayersController(LoadingContext _context)
    {
        context = _context;
    }

    // GET ALL PLAYERS
    [HttpGet]
    public async Task<ActionResult<List<Player>>> Get()
    {
        try
        {
            List<Player> players = await context.Players.ToListAsync();
            if (players != null)
               {
                return Ok(players);
                }
            else
            {
                return NotFound();
            }
            }
            catch
            {
                return StatusCode(500);
            }    
}
// GET PLAYER BY ID
[HttpGet("{id}")]
public async Task<ActionResult<Player>> Get(int id)
{
    try
    {
        Player? player = await context.Players.FindAsync(id);
        if (player != null)
        {
            return Ok(player);
        }
        else
        {
            return NotFound();
        }
    }
    catch
    {
        return StatusCode(500);
    }
}

// POST PLAYER
[HttpPost]
public async Task<ActionResult<Player>> Post(Player newPlayer)
{
    try
    {
        context.Players.Add(newPlayer);
        await context.SaveChangesAsync();
        return CreatedAtAction("Get", new { id = newPlayer.Id }, newPlayer);
    }
    catch
    {
        return StatusCode(500);
    }
}

// DELETE PLAYER
[HttpDelete("{id}")]
public async Task<ActionResult<Player>> Delete(int id)
{
    try
    {
        Player? player = await context.Players.FindAsync(id);
        if (player != null)
        {
            context.Players.Remove(player);
            await context.SaveChangesAsync();
            return NoContent();
        }
        else
        {
            return NotFound();
        }
    }
    catch
    {
        return StatusCode(500);
    }
}
}



