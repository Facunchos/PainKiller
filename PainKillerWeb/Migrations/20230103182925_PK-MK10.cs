using Microsoft.EntityFrameworkCore.Migrations;

namespace PainKillerWeb.Migrations
{
    public partial class PKMK10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "notas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PersonajeId = table.Column<int>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Descripcion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_notas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_notas_personajes_PersonajeId",
                        column: x => x.PersonajeId,
                        principalTable: "personajes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_notas_PersonajeId",
                table: "notas",
                column: "PersonajeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "notas");
        }
    }
}
