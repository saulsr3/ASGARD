using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class AreaDeNegocio
    {
        public AreaDeNegocio()
        {
            ActivoFijo = new HashSet<ActivoFijo>();
            Empleado = new HashSet<Empleado>();
        }

        public int IdAreaNegocio { get; set; }
        public string Nombre { get; set; }
        public int? IdSucursal { get; set; }
        public string Correlativo { get; set; }
        public int? Dhabilitado { get; set; }

        public Sucursal IdSucursalNavigation { get; set; }
        public ICollection<ActivoFijo> ActivoFijo { get; set; }
        public ICollection<Empleado> Empleado { get; set; }
    }
}
