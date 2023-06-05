using APIWorkTask.DTOs;
using APIWorkTask.Models;
using APIWorkTask.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace APIWorkTask.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ProjetsDTOController : Controller
    {
        private readonly IRepository<Projet> _repository;
        private readonly IMapper _mapper;
        public ProjetsDTOController(IRepository<Projet> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var projets = _repository.GetAll();
            var projetsDTO = _mapper.Map<List<Projet>, List<ProjetsDTO>>(projets);
            return Ok(projetsDTO);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var projet = _repository.GetById(id);

            if (projet == null)
                return NotFound(new
                {
                    Message = "Il n'existe aucune projet avec cet id"
                });

            var projetDTO = _mapper.Map<Projet, ProjetsDTO>(projet);

            return Ok(new
            {
                Message = "projet trouvée.",
                projet = projetDTO
            });
        }

        [HttpPost]
        public IActionResult Post([FromBody] ProjetsDTO projetDTO)
        {
            var projet = _mapper.Map<ProjetsDTO, Projet>(projetDTO);

            int createdAtId = _repository.Add(projet);
            if (createdAtId > 0)
                return Created($"/projet/{createdAtId}", "projet ajoutée");

            return BadRequest("La projet n'a pas pu être ajoutée...");
        }

        [HttpPut]
        public IActionResult Put(int id, [FromBody] ProjetsDTO projetDTO)
        {
            var projet = _mapper.Map<ProjetsDTO, Projet>(projetDTO);
            var projetFromDb = _repository.GetById(id);

            if (projetFromDb == null)
                return NotFound("Aucune projet avec cet Id");

            projet.Id = id;

            if (_repository.Update(projet))
                return Ok("La projet est modifiée !");

            return BadRequest("La projet n'a pas pu être modifiée...");
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            if (_repository.Delete(id))
                return Ok("La projet a été supprimée !");

            return BadRequest("La projet n'a pas était trouvée...");
        }
    }
}
