using System.ComponentModel.DataAnnotations;

namespace PainKillerWeb.Models.Extra
{
    public class Nota
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int PersonajeId { get; set; }

        public string Nombre { get; set; }
        public string Descripcion { get; set; }
    }
}
