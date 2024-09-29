using System;
using System.Collections.Generic;

namespace _26_9_2024.Server.Models;

public partial class ActivityCategory
{
    public int CategoryId { get; set; }

    public string CategoryName { get; set; } = null!;

    public virtual ICollection<Activity> Activities { get; set; } = new List<Activity>();
}
