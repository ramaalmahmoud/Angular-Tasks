﻿namespace _26_9_2024.Server.DTO
{
    public class ProductDisplayDto
    {
        public int ProductID { get; set; }
        public string Title { get; set; }
        public decimal? Price { get; set; }
        public string Image { get; set; }
        public double? Stars { get; set; } // This will represent the star rating
    }
}
