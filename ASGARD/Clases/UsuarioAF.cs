using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASGARD.Clases
{
    public class UsuarioAF
    {
        public int iidusuario { get; set; }
        public string nombreusuario { get; set; }
        public string nombreEmpleado { get; set; }
        public int bhabilitado { get; set; }
        public string nombreTipoUsuario { get; set; }

        public int iidEmpleado { get; set; }

        public int iidTipousuario { get; set; }

        public string contra { get; set; }
        public string contra2 { get; set; }
    }
}
