using System;
using System.Collections.Generic;

namespace AngularApp2.Server.Models;

public partial class Service
{
    public int ServiceId { get; set; }

    public string ServiceName { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<SubService> SubServices { get; set; } = new List<SubService>();
}
