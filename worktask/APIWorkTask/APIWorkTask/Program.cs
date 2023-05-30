var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

    services.AddScoped<TacheRepository>();

    services.AddControllers().AddNewtonsoftJson();
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();

}
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
