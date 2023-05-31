using APIWorkTask.Data;
using APIWorkTask.Models;
using APIWorkTask.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace APIWorkTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonnesController : ControllerBase
    {
        private readonly PersonneRepositories _repository;

        public PersonnesController(ApplicationDbContext context)
        {
            _repository = new PersonneRepositories(context);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var personne = _repository.GetById(id);
            if (personne == null)
                return NotFound();

            return Ok(personne);
        }

<<<<<<< HEAD


=======
        [HttpPost]
        public IActionResult Create(Personne personne)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var personneId = _repository.Add(personne);
            return CreatedAtAction(nameof(GetById), new { id = personneId }, personne);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Personne personne)
        {
            if (id != personne.Id)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var updatedPersonne = _repository.Update(personne);
            if (updatedPersonne == null)
                return NotFound();

            return Ok(updatedPersonne);
        }

        //[HttpGet]
        //public IActionResult GetAll()
        //{
        //    var personnes = _repository.GetAll();
        //    return Ok(personnes);
        //}


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var deleted = _repository.Delete(id);
            if (!deleted)
                return NotFound();

            return NoContent();
>>>>>>> Main
        }
    }
}