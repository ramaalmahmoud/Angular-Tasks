namespace AngularApp2.Server.DTO
{
    public class AddServiceDto
    {

        public string ServiceName { get; set; } = null!;

        public string? Description { get; set; }
        public IFormFile? Image { get; set; }


    }
}
