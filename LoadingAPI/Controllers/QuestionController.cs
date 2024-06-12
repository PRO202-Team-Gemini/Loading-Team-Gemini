namespace LoadingAPI.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LoadingAPI.Models;
using LoadingAPI.Contexts;
using LoadingAPI.Entities;


[ApiController]
[Route("api/[controller]")]
public class QuestionController : ControllerBase
{
// Deklarasjon av Context
    private readonly LoadingContext context;
// Intiere Context
    public QuestionController(LoadingContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Question>>> Get()
    {
        try
        {
            List<Question> questions = await context.Questions.ToListAsync();
            if (questions != null)
               {
                return Ok(questions);
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

[HttpGet("{id}")]
public async Task<ActionResult<Question>> Get(int id)
{
    try
    {
        Question? question = await context.Questions.FindAsync(id);
        if (question != null)
        {
            return Ok(question);
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