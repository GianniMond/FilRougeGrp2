using APIWorkTask.Data;
using APIWorkTask.Models;
using Microsoft.EntityFrameworkCore;

namespace APIWorkTask.Repositories
{
    public class TacheRepository
    {
        private ApplicationDbContext _context {  get; set; }
        public TacheRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Taches GetById(int id)
        {
            return _context.Taches.Find(id);
        }

        public int Add(Taches taches)
        {
            var ajouutTache = _context.Taches.Add(taches);
            _context.SaveChanges();
            return ajouutTache.Entity.Id;
        }

        public bool Avancement(Taches taches)
        {
            var tacheChangement = GetById(taches.Id);

            if (tacheChangement.Avancement != taches.Avancement)
                tacheChangement.Avancement = taches.Avancement;
            return _context.SaveChanges() > 0;
        }

        public bool Delete(int id)
        {
            var tache = GetById(id);
            if (tache == null)
                return false;
            _context.Taches.Remove(tache);
            return _context.SaveChanges() > 0;
        }
        
    }
}
