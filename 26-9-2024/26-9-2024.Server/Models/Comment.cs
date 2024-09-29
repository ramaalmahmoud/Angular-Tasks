using System;
using System.Collections.Generic;

namespace _26_9_2024.Server.Models;

public partial class Comment
{
    public int CommentId { get; set; }

    public int? PostId { get; set; }

    public int? UserId { get; set; }

    public string? CommentText { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? IsApproved { get; set; }

    public virtual BlogPost? Post { get; set; }

    public virtual User? User { get; set; }
}
