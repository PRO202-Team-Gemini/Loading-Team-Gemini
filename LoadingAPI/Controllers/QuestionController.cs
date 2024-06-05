namespace LoadingAPI.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LoadingAPI.Models;
using LoadingAPI.Contexts;


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
}