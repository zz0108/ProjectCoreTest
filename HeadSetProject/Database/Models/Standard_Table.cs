namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Standard_Table
    {
        [Key]
        public string Product_Id { get; set; }

        [StringLength(20)]
        public string Anyi_Noise { get; set; }

        [StringLength(200)]
        public string Impedance { get; set; }

        [StringLength(200)]
        public string Seneitivity { get; set; }

        [StringLength(200)]
        public string Size { get; set; }

        [StringLength(200)]
        public string Monomer { get; set; }

        [StringLength(200)]
        public string Frequency { get; set; }

        [StringLength(50)]
        public string Endurance { get; set; }

        [Required]
        [StringLength(50)]
        public string ButtonType { get; set; }
    }
}
