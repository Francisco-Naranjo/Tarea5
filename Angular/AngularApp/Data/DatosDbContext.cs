using Microsoft.EntityFrameworkCore;
    using AngularApp.Models.Entidades;
    namespace AngularApp.Data

{
    public class DatosDbContext : DbContext
    {
        public DatosDbContext(DbContextOptions<DatosDbContext> options) : base(options)
        {
        }

        public DbSet<ClientesModel> Clientes { get; set; }
        public DbSet<UsuariosModel> Usuarios { get; set; }
    }
}
