﻿using System;
using System.Collections.Generic;

namespace _26_9_2024.Server.Models;

public partial class ProductCategory
{
    public int CategoryId { get; set; }

    public string? CategoryName { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
