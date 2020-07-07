namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Product_Table
    {
        [Key]
        public string Product_Id { get; set; }

        [Required]
        [StringLength(128)]
        public string Product_Name { get; set; }

        [Required]
        [StringLength(128)]
        public string Manufacturer { get; set; }

        [Required]
        [StringLength(128)]
        public string Country { get; set; }

        [Required]
        [StringLength(128)]
        public string Type { get; set; }

        public int Price { get; set; }

        [Column(TypeName = "smalldatetime")]
        public DateTime? Added_Time { get; set; }
    }
}
