using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Bitacora = new HashSet<Bitacora>();
        }

        public int IdUsuario { get; set; }
        public string NombreUsuario { get; set; }
        public string Contra { get; set; }
        public string IdEmpleado { get; set; }
        public int? IdTipoUsuario { get; set; }
        public int? Dhabilitado { get; set; }

        public Empleado IdEmpleadoNavigation { get; set; }
        public TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public ICollection<Bitacora> Bitacora { get; set; }
    }
}
