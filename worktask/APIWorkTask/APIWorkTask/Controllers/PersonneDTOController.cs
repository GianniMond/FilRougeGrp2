using APIWorkTask.DTOs;
using APIWorkTask.Models;
using APIWorkTask.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace APIWorkTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonneDTOController : Controller
    {   
        private readonly IRepository<Personne> _repository;
        private readonly IMapper _mapper;
        public PersonneDTOController(IRepository<Personne> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var personnes = _repository.GetAll();
            var personnesDTO = _mapper.Map<List<Personne>, List<PersonneDTO>>(personnes);
            return Ok(personnesDTO);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var personne = _repository.GetById(id);

            if (personne == null)
                return NotFound(new
                {
                    Message = "Il n'existe aucune personne avec cet id"
                });

            var personneDTO = _mapper.Map<Personne, PersonneDTO>(personne);

            return Ok(new
            {
                Message = "personne trouvée.",
                personne = personneDTO
            });
        }

        [HttpPost]
        public IActionResult Post([FromBody] PersonneDTO personneDTO)
        {
            var personne = _mapper.Map<PersonneDTO, Personne>(personneDTO);

            int createdAtId = _repository.Add(personne);
            if (createdAtId > 0)
                return Created($"/personne/{createdAtId}", "personne ajoutée");

            return BadRequest("La personne n'a pas pu être ajoutée...");
        }

        [HttpPut]
        public IActionResult Put(int id, [FromBody] PersonneDTO personneDTO)
        {
            var personne = _mapper.Map<PersonneDTO, Personne>(personneDTO);
            var personneFromDb = _repository.GetById(id);

            if (personneFromDb == null)
                return NotFound("Aucune personne avec cet Id");

            personne.Id = id;

            if (_repository.Update(personne))
                return Ok("La personne est modifiée !");

            return BadRequest("La personne n'a pas pu être modifiée...");
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            if (_repository.Delete(id))
                return Ok("La personne a été supprimée !");

            return BadRequest("La personne n'a pas était trouvée...");
        }
    }
}
