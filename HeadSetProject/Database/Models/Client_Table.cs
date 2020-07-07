namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Client_Table
    {
        [Key]
        public string Clint_Id { get; set; }

        [Required]
        [StringLength(50)]
        public string UserName { get; set; }

        public int Phone { get; set; }

        [StringLength(50)]
        public string E_Mail { get; set; }

        [Required]
        [StringLength(12)]
        public string Gender { get; set; }

        [Column(TypeName = "smalldatetime")]
        public DateTime Birthday { get; set; }

        [Required]
        [StringLength(128)]
        public string Shopping_Car_Id { get; set; }
    }
}
