using APIWorkTask.DTOs;
using APIWorkTask.Models;
using APIWorkTask.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Migrations;

namespace APIWorkTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TachesDTOController : ControllerBase
    {
        private readonly IRepository<Taches> _repository;
        private readonly IMapper _mapper;
        public TachesDTOController(IRepository<Taches> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;            
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var taches = _repository.GetAll();
            var tachesDTO = _mapper.Map<List<Taches>, List<TachesDTO>>(taches);
            return Ok(tachesDTO);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id) 
        {
            var tache = _repository.GetById(id);

            if (tache == null)
                return NotFound(new
                {
                    Message = "Il n'existe aucune tâche avec cet id"
                });

            var tacheDTO = _mapper.Map<Taches, TachesDTO>(tache);

            return Ok(new 
            {
                Message = "Tâche trouvée.",
                Tache = tacheDTO
            });           
        }

        [HttpPost]
        public IActionResult Post([FromBody] TachesDTO tacheDTO)
        {
            var tache = _mapper.Map<TachesDTO, Taches>(tacheDTO);

            int createdAtId = _repository.Add(tache);
            if (createdAtId > 0)
                return Created($"/taches/{createdAtId}", "Tache ajoutée");

            return BadRequest("La tâche n'a pas pu être ajoutée...");
        }

        [HttpPut]
        public IActionResult Put(int id, [FromBody] TachesDTO tacheDTO)
        {
            var tache = _mapper.Map<TachesDTO, Taches>(tacheDTO);
            var tacheFromDb = _repository.GetById(id);

            if (tacheFromDb == null)
                return NotFound("Aucune tâche avec cet Id");

            tache.Id = id;

            if (_repository.Update(tache))
                return Ok("La tâche est modifiée !");

            return BadRequest("La tâche n'a pas pu être modifiée...");
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            if (_repository.Delete(id))
                return Ok("La tâche a été supprimée !");

            return BadRequest("La tâche n'a pas était trouvée...");
        }
    }
}
