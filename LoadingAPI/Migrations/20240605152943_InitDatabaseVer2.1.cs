using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LoadingAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitDatabaseVer21 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_StatKey_StatKeyId",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "AffectedStatId",
                table: "Answers");

            migrationBuilder.AlterColumn<int>(
                name: "StatKeyId",
                table: "Answers",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_StatKey_StatKeyId",
                table: "Answers",
                column: "StatKeyId",
                principalTable: "StatKey",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_StatKey_StatKeyId",
                table: "Answers");

            migrationBuilder.AlterColumn<int>(
                name: "StatKeyId",
                table: "Answers",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<int>(
                name: "AffectedStatId",
                table: "Answers",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_StatKey_StatKeyId",
                table: "Answers",
                column: "StatKeyId",
                principalTable: "StatKey",
                principalColumn: "Id");
        }
    }
}
