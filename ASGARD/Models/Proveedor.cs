using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class Proveedor
    {
        public Proveedor()
        {
            ActivoFijo = new HashSet<ActivoFijo>();
        }

        public int IdProveedor { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Rubro { get; set; }
        public string Encargado { get; set; }
        public string TelefonoEncargado { get; set; }
        public int? Dhabilitado { get; set; }

        public ICollection<ActivoFijo> ActivoFijo { get; set; }
    }
}
