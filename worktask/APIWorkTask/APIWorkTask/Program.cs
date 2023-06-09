using APIWorkTask.Data;
using APIWorkTask.Repositories;
using Microsoft.EntityFrameworkCore;
<<<<<<< HEAD
=======
using Microsoft.IdentityModel;

>>>>>>> BeforeMain


var builder = WebApplication.CreateBuilder(args);

string connectionString = builder.Configuration.GetConnectionString("DefaultConnection")!;
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));

<<<<<<< HEAD
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ApplicationDbContext>(options =>


//void ConfigureServices(IServiceCollection services)
//{
//    services.AddDbContext<ApplicationDbContext>(options =>
//        options.UseSqlServer(("DefaultConnection")));

    services.AddScoped<TacheRepository>());

    services.AddControllers();
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();

    var app = builder.Build();

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseAuthorization();

    app.MapControllers();

    app.Run();
}
