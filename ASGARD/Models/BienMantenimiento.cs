using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class BienMantenimiento
    {
        public int IdSolicitud { get; set; }
        public string IdBien { get; set; }

        public ActivoFijo IdBienNavigation { get; set; }
        public SolicitudMantenimiento IdSolicitudNavigation { get; set; }
    }
}
