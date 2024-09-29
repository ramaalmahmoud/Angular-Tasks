using _26_9_2024.Server.DTO;
using _26_9_2024.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _26_9_2024.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly MyDbContext _db;
        public ProductsController(MyDbContext db)
        {
            _db = db;
        }
        // GET: api/products/all
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<ProductDisplayDto>>> GetAllProducts()
        {
            // Fetch all products and their average star ratings
            var products = await _db.Products
                .Include(p => p.Category) // Include category if needed
                .ToListAsync();

            var productDisplayList = products.Select(p => new ProductDisplayDto
            {
                ProductID = p.ProductId,
                Title = p.Title,
                Price = p.Price,
                Image = p.Image,
                Stars = GetAverageRating(p.ProductId) // Method to calculate the average rating
            }).ToList();

            return Ok(productDisplayList);
        }

        private double? GetAverageRating(int productId)
        {
            // Get the reviews for the specified product ID
            var reviews = _db.Reviews
                .Where(r => r.ProductId == productId)
                .ToList();

            // Calculate the average rating
            if (reviews.Count == 0)
            {
                return 0; // No reviews, return 0 or any default value
            }

            double? averageRating = reviews.Average(r => r.Rating);
            return averageRating;
        }
    }
}
