using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASGARD.Clases
{
    public class TipoUsuarioAF
    {
        public int iidtipousuario { get; set; }
        public string tipo { get; set; }

        //seguridad
        public string descripcion { get; set; }
        public int bhabilitado { get; set; }
    }
}
