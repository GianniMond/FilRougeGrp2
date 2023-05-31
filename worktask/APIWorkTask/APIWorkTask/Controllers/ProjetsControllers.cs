using APIWorkTask.Data;
using Microsoft.AspNetCore.Mvc;

namespace APIWorkTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjetsController : ControllerBase
    {
        private readonly ProjetRepository _repository;

        public ProjetsController(ApplicationDbContext context)
        {
            _repository = new ProjetRepository(context);
        }

        // Ajoutez vos méthodes d'action (GET, POST, PUT, DELETE) ici
    }
}