using APIWorkTask.Models;
using APIWorkTask.DTOs;
using AutoMapper;

namespace APIWorkTask.Helpers
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Personne, PersonneDTO>().ReverseMap(); //cette ligne permet de dire qu'a l'aide du mapper on pourra passer de l'entité vers le DTO
        }
    }
}
