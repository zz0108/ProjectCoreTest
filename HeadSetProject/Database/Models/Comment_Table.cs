namespace Database.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Comment_Table
    {
        [Key]
        [Column(Order = 0)]
        public string User_Id { get; set; }

        [Key]
        [Column(Order = 1)]
        public string Product_Name { get; set; }

        [Key]
        [Column(Order = 2)]
        public string Comment { get; set; }

        public string Picture { get; set; }

        [Key]
        [Column(Order = 3)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Rating { get; set; }
    }
}
