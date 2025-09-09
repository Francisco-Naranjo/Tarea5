using System.ComponentModel.DataAnnotations;
using AngularApp.Models.Entidades.Base;

namespace AngularApp.Models.Entidades
{
    public class UsuariosModel : BaseModel
    {
        [EmailAddress(ErrorMessage = "El formato no de correo electronico")]
        [Required(ErrorMessage = "El campo es requerido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "El campo es requerido")]
        public string Password { get; set; }

        [Required(ErrorMessage = "El campo es requerido")]
        public string ConfirmPassword { get; set; }

    }
}
