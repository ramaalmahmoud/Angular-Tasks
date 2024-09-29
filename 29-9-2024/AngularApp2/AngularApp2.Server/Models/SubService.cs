using System;
using System.Collections.Generic;

namespace AngularApp2.Server.Models;

public partial class SubService
{
    public int SubServiceId { get; set; }

    public string SubServiceName { get; set; } = null!;

    public int ServiceId { get; set; }

    public string? Description { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Service Service { get; set; } = null!;
}
