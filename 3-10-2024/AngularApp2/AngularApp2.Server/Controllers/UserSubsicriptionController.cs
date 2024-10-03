using AngularApp2.Server.DTO;
using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubsicriptionController : ControllerBase
    {

        private readonly MyDbContext _db;
        public UserSubsicriptionController(MyDbContext db)
        {
            _db = db;
        }
        [HttpPost]
        public IActionResult AddUserSubsicription([FromBody] UserSubsicriptionDto userSubsicriptionDto)
        {
            var sub=_db.Subscriptions.Where(x=>x.SubscriptionId == userSubsicriptionDto.subsicriotionID).FirstOrDefault();
            var amount = sub.SubscriptionAmount;

            var startDate=DateOnly.FromDateTime(DateTime.Now);
            DateOnly endDate=DateOnly.FromDateTime(DateTime.Now);

            switch (amount) {
                case "7":
                    endDate = startDate.AddDays(1); break;

                case "90":
                    endDate = startDate.AddMonths(3); break;

                case "356":
                    endDate = startDate.AddYears(1); break;
            }

            var userSub = new UserSubscription
            {
                UserId = userSubsicriptionDto.UserId,
                SubscriptionId = userSubsicriptionDto.subsicriotionID,
                SubServiceId = userSubsicriptionDto.SubServiceId,
                StartDate = startDate,
                EndDate = endDate

            };
            _db.UserSubscriptions.Add(userSub);
            _db.SaveChanges();
            
            return Ok();


        }
    }
}
