using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class Clasificacion
    {
        public Clasificacion()
        {
            ActivoFijo = new HashSet<ActivoFijo>();
        }

        public int IdClasificacion { get; set; }
        public string Clasificacion1 { get; set; }
        public string Correlativo { get; set; }
        public string Descripcion { get; set; }
        public int? Dhabilitado { get; set; }

        public ICollection<ActivoFijo> ActivoFijo { get; set; }
    }
}
