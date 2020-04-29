using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class Bitacora
    {
        public int IdBitacora { get; set; }
        public int? IdUsuario { get; set; }
        public DateTime? Fecha { get; set; }
        public string Descripcion { get; set; }

        public Usuario IdUsuarioNavigation { get; set; }
    }
}
