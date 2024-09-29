using System;
using System.Collections.Generic;

namespace _26_9_2024.Server.Models;

public partial class Material
{
    public int MaterialId { get; set; }

    public string Name { get; set; } = null!;

    public int ActivityId { get; set; }

    public virtual Activity Activity { get; set; } = null!;
}
