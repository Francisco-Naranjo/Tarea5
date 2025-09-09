using System.ComponentModel.DataAnnotations;
using AngularApp.Models.Entidades.Base;

namespace AngularApp.Models.Entidades
{
    public class ClientesModel : BaseModel
    {
        [Required(ErrorMessage = "Cammpo Requerido")]
        public string Nombres { get; set; }

        [EmailAddress(ErrorMessage = "El formato no de correo electronico")]
        [Required(ErrorMessage = "El campo es requerido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Cammpo Requerido")]
        public string Telefono { get; set; }
        [Required(ErrorMessage = "Cammpo Requerido")]
        public string Direccion { get; set; }
        [Required(ErrorMessage = "Cammpo Requerido")]
        public string Cedula_RUC { get; set; }
    }
}

