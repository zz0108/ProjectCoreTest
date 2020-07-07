namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Shopping_Car_Table
    {
        [Key]
        [Column(Order = 0)]
        public string Shopping_Car_Id { get; set; }

        [Key]
        [Column(Order = 1)]
        public string Product_Name { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(50)]
        public string Color { get; set; }

        [Key]
        [Column(Order = 3)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Price { get; set; }

        [Key]
        [Column(Order = 4)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Quantity { get; set; }

        public int? Total_Price { get; set; }
    }
}
