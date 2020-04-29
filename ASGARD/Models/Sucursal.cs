using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class Sucursal
    {
        public Sucursal()
        {
            AreaDeNegocio = new HashSet<AreaDeNegocio>();
        }

        public int IdSucursal { get; set; }
        public string Nombre { get; set; }
        public string Ubicacion { get; set; }
        public string Correlativo { get; set; }
        public int? Dhabilitado { get; set; }

        public ICollection<AreaDeNegocio> AreaDeNegocio { get; set; }
    }
}
