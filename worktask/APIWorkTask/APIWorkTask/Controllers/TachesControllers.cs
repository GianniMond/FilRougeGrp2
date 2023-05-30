using APIWorkTask.Data;
using APIWorkTask.Models;
using APIWorkTask.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace APIWorkTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TachesController : ControllerBase
    {
        private readonly TacheRepository _repository;

        public TachesController(ApplicationDbContext context)
        {
            _repository = context;
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var tache = _repository.GetById(id);
            if (tache == null)
                return NotFound();

            return Ok(tache);
        }

        [HttpPost]
        public IActionResult Add(Taches tache)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var tacheId = _repository.Add(tache);

            return CreatedAtAction(nameof(GetById), new { id = tacheId }, tache);
        }

        [HttpPut("{id}/avancement")]
        public IActionResult UpdateAvancement(int id, Taches tache)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var existingTache = _repository.GetById(id);
            if (existingTache == null)
                return NotFound();

            existingTache.Avancement = tache.Avancement;

            if (_repository.Avancement(existingTache))
                return NoContent();

            return StatusCode(500, "Une erreur s'est produite lors de la mise à jour de l'avancement de la tâche.");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var deleted = _repository.Delete(id);
            if (!deleted)
                return NotFound();

            return NoContent();
        }
    }
}