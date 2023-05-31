using System.Linq.Expressions;

namespace APIWorkTask.Repositories
{
    public interface IRepository<TEntity>
    {
        int Add(TEntity personne);
        TEntity? GetById(int id);
        TEntity? Get(Expression<Func<TEntity, bool>> predicate);
        List<TEntity> GetAll();
        List<TEntity> GetAll(Expression<Func<TEntity, bool>> predicate);
        bool Update(TEntity personne);
        bool Delete(int id);
    }
}
