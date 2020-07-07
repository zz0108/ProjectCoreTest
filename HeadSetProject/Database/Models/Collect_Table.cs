namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Collect_Table
    {
        [Key]
        [Column(Order = 0)]
        public string Collect_Id { get; set; }

        [Key]
        [Column(Order = 1)]
        public string Clint_Id { get; set; }

        [Key]
        [Column(Order = 2)]
        public string Product_Name { get; set; }

        [Key]
        [Column(Order = 3)]
        public string Color { get; set; }
    }
}
