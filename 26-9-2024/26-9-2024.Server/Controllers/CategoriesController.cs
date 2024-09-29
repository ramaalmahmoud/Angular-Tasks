using _26_9_2024.Server.DTO;
using _26_9_2024.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _26_9_2024.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public CategoriesController(MyDbContext db)
        {
            _db = db;
        }
        // GET: api/categories
        [HttpGet("categories")]
        public  IActionResult GetCategories()
        {
            var categories =  _db.ProductCategories
                .Select(c => new CategoryDto
                {
                    CategoryID = c.CategoryId,
                    CategoryName = c.CategoryName,
                    Description = c.Description // Optional field
                })
                .ToList();

            return Ok(categories);
        }
        // POST: api/products/filterByCategories
        [HttpPost("filterByCategories")]
        public async Task<ActionResult<IEnumerable<Product>>> FilterProductsByCategories([FromQuery] List<int> categoryIds)
        {
            // Validate the category IDs (optional)
            if (categoryIds == null || !categoryIds.Any())
            {
                return BadRequest("No category IDs provided.");
            }

            var products = await _db.Products
                .Where(p => categoryIds.Contains(p.CategoryId))
                .Include(p => p.Reviews) // Include reviews if you need to show ratings
                .ToListAsync();

            return Ok(products);
        }

    }
}
