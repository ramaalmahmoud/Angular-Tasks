using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubsicriptionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public SubsicriptionController(MyDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public IActionResult getSubsicriotion()
        {
            var subsicription = _db.Subscriptions.ToList();
            return Ok(subsicription);
        }
    }
}
