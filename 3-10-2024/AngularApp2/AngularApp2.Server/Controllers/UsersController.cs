using AngularApp2.Server.DTO;
using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UsersController(MyDbContext db)
        {
            _db = db;
        }
        [HttpPost("register")]
        public IActionResult register([FromForm] UserRegisterDto userDto) {

            var u=_db.Users.FirstOrDefault(x=>x.Email == userDto.Email);
            if (u != null) {
                return BadRequest("user already exist");
            }

            var user = new User()
            {
                Username = userDto.Username,
                Email = userDto.Email,
                Password = userDto.Password,
            };
            _db.Users.Add(user);
            _db.SaveChanges();
        return Ok(user);
        }
        [HttpPost("login")]
        public IActionResult login([FromForm] UserLoginDto model)
        {
            var user = _db.Users.FirstOrDefault(x => x.Email == model.Email);
            if (user == null)
            {
                return BadRequest("password or email invalid");
            }
           var domain=user.Email.Split("@").Last();
            if (domain.Contains("admin"))
            {
                return Ok(new { role = "admin" });
            }
            return Ok(new { role = "user" });
        }
        }
    }
