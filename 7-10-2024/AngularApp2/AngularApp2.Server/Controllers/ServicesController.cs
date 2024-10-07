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
        [HttpPut("updateServices{id}")]
        public IActionResult updateServices(int id,[FromForm]UpdateServiceDto serviceDto)
        {


var services = _db.Services.FirstOrDefault(x=>x.ServiceId==id);
            if (services == null) {
                return BadRequest(services);
            }
            var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "Images");

            if (!Directory.Exists(uploadFolder))
            {
                Directory.CreateDirectory(uploadFolder);
            }

            var ImageFile = Path.Combine(uploadFolder, serviceDto.Image.FileName);

            using (var stream = new FileStream(ImageFile, FileMode.Create))

            {
                serviceDto.Image.CopyToAsync(stream);
            }
            services.ServiceName = serviceDto.ServiceName;
            services.Description = serviceDto.Description;
            services.Image=serviceDto.Image.FileName;
            _db.Services.Update(services);
            _db.SaveChanges();
            return Ok(services);
        }

        [HttpGet("getImage/{imageName}")]
        public IActionResult getImage(string imageName)
        {
            var pathImage = Path.Combine(Directory.GetCurrentDirectory(), "Images", imageName);
            if (System.IO.File.Exists(pathImage))
            {
                return PhysicalFile(pathImage,"image/*");
            }
            return NotFound();
        }
    }
    }
