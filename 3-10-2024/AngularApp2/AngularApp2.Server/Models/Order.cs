using System;
using System.Collections.Generic;

namespace AngularApp2.Server.Models;

public partial class Order
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public string? OrderDate { get; set; }

    public virtual User? User { get; set; }
}
