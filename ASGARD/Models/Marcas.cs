using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class Marcas
    {
        public Marcas()
        {
            ActivoFijo = new HashSet<ActivoFijo>();
        }

        public int IdMarca { get; set; }
        public string Marca { get; set; }
        public string Descripcion { get; set; }
        public int? Dhabilitado { get; set; }

        public ICollection<ActivoFijo> ActivoFijo { get; set; }
    }
}
