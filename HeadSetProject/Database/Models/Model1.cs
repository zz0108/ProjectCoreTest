namespace Database.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Database")
        {
        }

        public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<Client_Table> Client_Table { get; set; }
        public virtual DbSet<Order_Table> Order_Table { get; set; }
        public virtual DbSet<Product_Table> Product_Table { get; set; }
        public virtual DbSet<Standard_Table> Standard_Table { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<text> text { get; set; }
        public virtual DbSet<Voucher_Table> Voucher_Table { get; set; }
        public virtual DbSet<Client_Voucher_Table> Client_Voucher_Table { get; set; }
        public virtual DbSet<Collect_Table> Collect_Table { get; set; }
        public virtual DbSet<Comment_Table> Comment_Table { get; set; }
        public virtual DbSet<Product_P_C_Table> Product_P_C_Table { get; set; }
        public virtual DbSet<Return_Table> Return_Table { get; set; }
        public virtual DbSet<Shopping_Car_Table> Shopping_Car_Table { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AspNetRoles>()
                .HasMany(e => e.AspNetUsers)
                .WithMany(e => e.AspNetRoles)
                .Map(m => m.ToTable("AspNetUserRoles").MapLeftKey("RoleId").MapRightKey("UserId"));

            modelBuilder.Entity<AspNetUsers>()
                .HasMany(e => e.AspNetUserClaims)
                .WithRequired(e => e.AspNetUsers)
                .HasForeignKey(e => e.UserId);

            modelBuilder.Entity<AspNetUsers>()
                .HasMany(e => e.AspNetUserLogins)
                .WithRequired(e => e.AspNetUsers)
                .HasForeignKey(e => e.UserId);

            modelBuilder.Entity<AspNetUsers>()
                .HasOptional(e => e.AspNetUsers1)
                .WithRequired(e => e.AspNetUsers2);

            modelBuilder.Entity<Voucher_Table>()
                .Property(e => e.Voucher_Id)
                .IsUnicode(false);

            modelBuilder.Entity<Client_Voucher_Table>()
                .Property(e => e.Clint_Id)
                .IsUnicode(false);

            modelBuilder.Entity<Client_Voucher_Table>()
                .Property(e => e.Voucher_Id)
                .IsUnicode(false);
        }
    }
}
