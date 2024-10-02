using AngularApp2.Server.DTO;
using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public ServicesController(MyDbContext db)
        {
            _db = db;
        }
        [HttpGet("getServices")]
        public IActionResult getServices()
        {
            var services = _db.Services.ToList();
            return Ok(services);
        }
        [HttpPost("addServices")]
        public IActionResult addServices([FromForm] AddServiceDto model)
        {
            var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "Images");

            if (!Directory.Exists(uploadFolder))
            {
                Directory.CreateDirectory(uploadFolder);
            }

            var ImageFile = Path.Combine(uploadFolder, model.Image.FileName);

            using (var stream = new FileStream(ImageFile, FileMode.Create))

            {
                model.Image.CopyToAsync(stream);
            }

            var newservice = new Service
            {
                ServiceName = model.ServiceName,
                Description = model.Description,
                Image = model.Image.FileName,
            };
           var service=_db.Services.FirstOrDefault(s => s.ServiceName == model.ServiceName);
            if (service != null) {
                return BadRequest("the service already excist");
            }
            _db.Services.Add(newservice);
            _db.SaveChanges();
            return Ok(newservice);
        }
    }
    }
