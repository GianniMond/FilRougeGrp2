using APIWorkTask.Controllers;
using APIWorkTask.Data;
using APIWorkTask.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace APIWorkTask.Repositories
{
    public class PersonneRepositories
    {
        private ApplicationDbContext _context;

        public PersonneRepositories(DbContextOptions<ApplicationDbContext> options)
        {
            _context = new ApplicationDbContext(options);
        }

        public Personne GetById(int id)
        {
            return _context.Personnes.Find(id);
        }

        public int Add(Personne personne)
        {
            var ajoutPersonne = _context.Personnes.Add(personne);
            _context.SaveChanges();
            return ajoutPersonne.Entity.Id;
        }

        public bool Delete(int id)
        {
            var personne = GetById(id);
            if (personne == null)
                return false;
            _context.Personnes.Remove(personne);
            return true;
        }

        public bool Update(Personne personne)
        {
            var newPersonne = GetById(personne.Id);
            if (newPersonne == null)
                return false;

            if (newPersonne.Nom != personne.Nom)
                newPersonne.Nom = personne.Nom;

            if (newPersonne.Prenom != personne.Prenom)
                newPersonne.Prenom = personne.Prenom;

            if (newPersonne.Email != personne.Email)
                newPersonne.Email = personne.Email;

            _context.SaveChanges();
            return true;
        }
    }
}
