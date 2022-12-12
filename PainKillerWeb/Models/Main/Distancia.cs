﻿using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace PainKillerWeb.Models.Main
{
    public class Distancia
    {
        [Key]
        public int id { get; set; }

        [Display(Name = "Nombre")]
        [Required]
        public string nombre { get; set; }
    }
}
