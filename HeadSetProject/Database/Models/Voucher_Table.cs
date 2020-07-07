namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Voucher_Table
    {
        [Key]
        [StringLength(50)]
        public string Voucher_Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Voucher_Name { get; set; }

        public double Discount { get; set; }

        [Column(TypeName = "smalldatetime")]
        public DateTime Period_of_use { get; set; }
    }
}
