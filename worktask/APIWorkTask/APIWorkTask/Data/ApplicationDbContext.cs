using APIWorkTask.Models;
using Microsoft.EntityFrameworkCore;

namespace APIWorkTask.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Personne> Personnes { get; set; }
        public DbSet<Taches> Taches { get; set; }
        public DbSet<Projet> Projets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuration pour l'entité Personne
            modelBuilder.Entity<Personne>(entity =>
            {
                entity.Property(p => p.Id).IsRequired();
                entity.Property(p => p.Nom).IsRequired();
                entity.Property(p => p.Prenom).IsRequired();
                entity.Property(p => p.Email).IsRequired();
                entity.Property(p => p.MotDePasse).IsRequired();

                // Exemple de configuration spécifique pour l'entité Personne
                // ...

                // Exemple de relation entre Personne et Taches (One-to-Many)
                entity.HasMany(p => p.Taches)
                      .WithOne(t => t.Personne)
                      .HasForeignKey(t => t.PersonneID)
                      .OnDelete(DeleteBehavior.Restrict);
            });

            // Configuration pour l'entité Taches
            modelBuilder.Entity<Taches>(entity =>
            {
                entity.Property(t => t.Id).IsRequired();
                entity.Property(t => t.Titre).IsRequired();
                entity.Property(t => t.Avancement).IsRequired();
                entity.Property(t => t.PersonneID).IsRequired();

                // Exemple de configuration spécifique pour l'entité Taches
                // ...

                // Exemple de relation entre Taches et Projets (Many-to-One)
                entity.HasOne(t => t.Projet)
                      .WithMany(p => p.Taches)
                      .HasForeignKey(t => t.ProjetId)
                      .OnDelete(DeleteBehavior.Cascade);
            });

            // Configuration pour l'entité Projets
            modelBuilder.Entity<Projet>(entity =>
            {
                entity.Property(p => p.Id).IsRequired();
                entity.Property(p => p.Nom).IsRequired();
                entity.Property(p => p.Description).IsRequired();

                // Exemple de configuration spécifique pour l'entité Projets
                // ...
            });
        }
    }
}