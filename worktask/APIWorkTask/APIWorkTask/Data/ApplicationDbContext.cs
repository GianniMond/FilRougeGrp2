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
    }

}
