using System;
using System.Collections.Generic;

namespace _26_9_2024.Server.Models;

public partial class SavedPrintedActivity
{
    public int ActionId { get; set; }

    public int? UserId { get; set; }

    public int? ActivityId { get; set; }

    public string? ActionType { get; set; }

    public DateTime? ActionDate { get; set; }

    public virtual Activity? Activity { get; set; }

    public virtual User? User { get; set; }
}
