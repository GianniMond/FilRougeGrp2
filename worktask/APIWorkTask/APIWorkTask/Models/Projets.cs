namespace APIWorkTask.Models
{
    public class Projets
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Description { get; set; }
        public List<Taches>? Taches { get; set; }

    }
}
