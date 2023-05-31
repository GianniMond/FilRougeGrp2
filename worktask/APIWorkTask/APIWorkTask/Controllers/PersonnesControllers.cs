using APIWorkTask.Data;
using APIWorkTask.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace APIWorkTask.Controllers
{
    public class PersonnesControllers : Controller
    {
        [ApiController]
        [Route("api/[controller]")]

        public class PersonesController : ControllerBase
        {
            private readonly PersonneRepositories _repository;

            [HttpGet("{id}")]
            public IActionResult GetById(int id)
            {
                var personne = _repository.GetById(id);
                if (personne == null)
                    return NotFound();

                return Ok(personne);
            }



        }
    }
}
