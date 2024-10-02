using System;
using System.Collections.Generic;

namespace AngularApp2.Server.Models;

public partial class DescriptionUser
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string? Description { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public int SubServiceId { get; set; }

    public virtual SubService SubService { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
