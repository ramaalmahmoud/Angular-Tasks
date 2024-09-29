using System;
using System.Collections.Generic;

namespace _26_9_2024.Server.Models;

public partial class Suggestion
{
    public int SuggestionId { get; set; }

    public int? UserId { get; set; }

    public int? ActivityId { get; set; }

    public DateTime? SuggestedAt { get; set; }

    public virtual Activity? Activity { get; set; }

    public virtual User? User { get; set; }
}
