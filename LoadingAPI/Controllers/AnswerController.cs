namespace LoadingAPI.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using LoadingAPI.Models;
    using LoadingAPI.Contexts;
    using LoadingAPI.Entities;

    [ApiController]
    [Route("api/[controller]")]
    public class AnswerController : ControllerBase
    {
        // Deklarasjon av Context
        private readonly LoadingContext context;
        // Intiere Context
        public AnswerController(LoadingContext _context)
        {
            context = _context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Answer>>> Get()
        {
            try
            {
                List<Answer> answers = await context.Answers.ToListAsync();
                if (answers != null)
                {
                    return Ok(answers);
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
        public async Task<ActionResult<Answer>> Get(int id)
        {
            try
            {
                Answer? answer = await context.Answers.FindAsync(id);
                if (answer != null)
                {
                    return Ok(answer);
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
}