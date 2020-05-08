using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class SolicitudMantenimiento
    {
        public int IdSolicitud { get; set; }
        public DateTime? Fecha { get; set; }
        public int? Folio { get; set; }

        public BienMantenimiento BienMantenimiento { get; set; }
    }
}
