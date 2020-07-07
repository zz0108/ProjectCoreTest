namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Order_Table
    {
        public string Id { get; set; }

        [Required]
        [StringLength(128)]
        public string Order_Id { get; set; }

        [Required]
        [StringLength(128)]
        public string Shopping_Car_Id { get; set; }

        [Required]
        [StringLength(128)]
        public string Product_Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Color { get; set; }

        public DateTime Time { get; set; }

        public int Quantity { get; set; }

        public int Total_Price { get; set; }

        [Required]
        [StringLength(128)]
        public string Shipping_Point { get; set; }

        [Required]
        [StringLength(128)]
        public string Receiving_Point { get; set; }

        [Required]
        [StringLength(128)]
        public string Payment_Method { get; set; }

        [StringLength(128)]
        public string Logistics_Id { get; set; }

        [Required]
        [StringLength(128)]
        public string Logistics { get; set; }

        [Required]
        [StringLength(128)]
        public string Recipient { get; set; }

        public int Recipient_Phone { get; set; }

        [StringLength(128)]
        public string Return_Id { get; set; }

        [Required]
        [StringLength(128)]
        public string Order_Status { get; set; }

        [Column(TypeName = "smalldatetime")]
        public DateTime? Cancel_Time { get; set; }
    }
}
