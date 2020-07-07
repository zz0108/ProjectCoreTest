namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Client_Voucher_Table
    {
        [Key]
        [Column(Order = 0)]
        [StringLength(50)]
        public string Clint_Id { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(50)]
        public string Voucher_Id { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(50)]
        public string Voucher_Name { get; set; }

        [Key]
        [Column(Order = 3)]
        public double Discount { get; set; }

        [Key]
        [Column(Order = 4, TypeName = "smalldatetime")]
        public DateTime Period_of_use { get; set; }

        [Key]
        [Column(Order = 5)]
        public bool Use_or_Not { get; set; }
    }
}
