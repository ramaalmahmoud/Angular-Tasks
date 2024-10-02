using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubServicesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public SubServicesController(MyDbContext db)
        {
            _db = db;
        }
        [HttpGet("getSubservicesById{id}")]
        public IActionResult getSubservicesById(int id)
        {
            var subservices = _db.SubServices.Where(x => x.SubServiceId == id).FirstOrDefault();
            return Ok(subservices);
        }
        [HttpGet("getSubservicesByserviceId{id}")]
        public IActionResult getSubservicesByserviceId(int id)
        {
            var subservices = _db.SubServices.Where(x => x.ServiceId == id).ToList();
            return Ok(subservices);
        }
    }
}
