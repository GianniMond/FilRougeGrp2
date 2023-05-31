using System.ComponentModel.DataAnnotations;

namespace APIWorkTask.DTOs
{
    public class TachesDTO
    {        
            public int Id { get; set; }
            [Required]
            public string Titre { get; set; }
            public string? Description { get; set; }
            [Required]
            public Avancement Avancement { get; set; }
            public int? PersonneID { get; set; }
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
