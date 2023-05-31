using APIWorkTask.Data;
using APIWorkTask.Models;
using APIWorkTask.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string connectionString = builder.Configuration.GetConnectionString("DefaultConnection")!;
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
//void ConfigureServices(IServiceCollection services)
//{
//    services.AddDbContext<ApplicationDbContext>(options =>
//        options.UseSqlServer(("DefaultConnection")));

//    services.AddScoped<TacheRepository>();

//    services.AddControllers();
//    services.AddEndpointsApiExplorer();
//    services.AddSwaggerGen();

//}
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
