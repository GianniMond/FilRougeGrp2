using APIWorkTask.Models;

namespace APIWorkTask.DTOs
{
    public class ProjetsDTO
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Description { get; set; }
        public List<Taches>? Taches { get; set; }

    }
}
