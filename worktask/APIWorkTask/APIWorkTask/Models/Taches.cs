using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography.X509Certificates;

namespace APIWorkTask.Models
{
    public class Taches
    {
        public int Id { get; set; }
        [Required]
        public string Titre { get; set; }
        public string Description { get; set; }
        [Required]
        public Avancement Avancement { get; set; }
        public int PersonneID { get; set; }
    }
    public enum Avancement
    {
        AFaire,
        EnCours, 
        Importante,
        AVerifier, 
        Terminée
    }

}
