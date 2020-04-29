using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class FormularioIngreso
    {
        public FormularioIngreso()
        {
            ActivoFijo = new HashSet<ActivoFijo>();
        }

        public int NoFormulario { get; set; }
        public string NoFactura { get; set; }
        public DateTime? FechaIngreso { get; set; }
        public int? Cantidad { get; set; }
        public string PersonaEntrega { get; set; }
        public string PersonaRecibe { get; set; }
        public string Observaciones { get; set; }

        public ICollection<ActivoFijo> ActivoFijo { get; set; }
    }
}
