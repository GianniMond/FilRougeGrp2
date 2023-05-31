using APIWorkTask.Data;
using APIWorkTask.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace APIWorkTask.Repositories
{
    public class ProjetRepository
    {
        private readonly ApplicationDbContext _context;

        public ProjetRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Projet GetById(int id)
        {
            return _context.Projets.Include(p => p.Taches).FirstOrDefault(p => p.Id == id);
        }

        public int Add(Projet projet)
        {
            _context.Projets.Add(projet);
            _context.SaveChanges();
            return projet.Id;
        }

        public Projet Update(Projet projet)
        {
            var existingProjet = GetById(projet.Id);
            if (existingProjet == null)
                return null;

            existingProjet.Nom = projet.Nom;
            existingProjet.Description = projet.Description;
            _context.SaveChanges();
            return existingProjet;
        }

        public bool Delete(int id)
        {
            var projet = GetById(id);
            if (projet == null)
                return false;

            _context.Projets.Remove(projet);
            _context.SaveChanges();
            return true;
        }
    }
}