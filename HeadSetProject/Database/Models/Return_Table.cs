namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Return_Table
    {
        [Key]
        [Column(Order = 0)]
        public string Return_Id { get; set; }

        [Key]
        [Column(Order = 1)]
        public string Order_Id { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(50)]
        public string Return { get; set; }

        [Key]
        [Column(Order = 3)]
        public string Reason { get; set; }
    }
}
