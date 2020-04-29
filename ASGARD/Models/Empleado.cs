using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class Empleado
    {
        public Empleado()
        {
            ActivoFijo = new HashSet<ActivoFijo>();
            Usuario = new HashSet<Usuario>();
        }

        public string Dui { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string TelefonoPersonal { get; set; }
        public int? IdAreaDeNegocio { get; set; }
        public int? IdCargo { get; set; }
        public int? BtieneUsuario { get; set; }
        public int? Dhabilitado { get; set; }

        public AreaDeNegocio IdAreaDeNegocioNavigation { get; set; }
        public Cargos IdCargoNavigation { get; set; }
        public ICollection<ActivoFijo> ActivoFijo { get; set; }
        public ICollection<Usuario> Usuario { get; set; }
    }
}
