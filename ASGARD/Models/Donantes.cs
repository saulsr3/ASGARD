using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class Donantes
    {
        public Donantes()
        {
            ActivoFijo = new HashSet<ActivoFijo>();
        }

        public int IdDonante { get; set; }
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
        public int? Dhabilitado { get; set; }

        public ICollection<ActivoFijo> ActivoFijo { get; set; }
    }
}
