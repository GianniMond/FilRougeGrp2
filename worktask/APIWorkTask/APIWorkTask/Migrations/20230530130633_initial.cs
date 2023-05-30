using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIWorkTask.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Personnes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Prenom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MotDePasse = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Personnes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Projets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Taches",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Avancement = table.Column<int>(type: "int", nullable: false),
                    PersonneID = table.Column<int>(type: "int", nullable: true),
                    ProjetsId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Taches", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Taches_Projets_ProjetsId",
                        column: x => x.ProjetsId,
                        principalTable: "Projets",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Taches_ProjetsId",
                table: "Taches",
                column: "ProjetsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Personnes");

            migrationBuilder.DropTable(
                name: "Taches");

            migrationBuilder.DropTable(
                name: "Projets");
        }
    }
}
