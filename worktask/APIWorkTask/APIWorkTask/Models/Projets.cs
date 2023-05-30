using System.ComponentModel.DataAnnotations;

namespace APIWorkTask.Models
{
    public class Projet
    {
        public int Id { get; set; }
        [Required]
        public string Nom { get; set; }
        public string Description { get; set; }
        public List<Taches>? Taches { get; set; }

    }
}