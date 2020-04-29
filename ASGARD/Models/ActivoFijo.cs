using System;
using System.Collections.Generic;

namespace ASGARD.Models
{
    public partial class ActivoFijo
    {
        public string CodigoBien { get; set; }
        public int? NoFormulario { get; set; }
        public string Desripcion { get; set; }
        public string EstadoIngreso { get; set; }
        public int? IdClasificacion { get; set; }
        public int? IdAreaDeNegocio { get; set; }
        public int? IdMarca { get; set; }
        public string Modelo { get; set; }
        public int? IdProveedor { get; set; }
        public int? IdDonante { get; set; }
        public double? CostoAdquicicion { get; set; }
        public string PlazoPago { get; set; }
        public double? CuotaAsignanda { get; set; }
        public string IdResponsable { get; set; }
        public string DestinoInicial { get; set; }
        public byte[] Foto { get; set; }
        public int? Dhabilitado { get; set; }

        public AreaDeNegocio IdAreaDeNegocioNavigation { get; set; }
        public Clasificacion IdClasificacionNavigation { get; set; }
        public Donantes IdDonanteNavigation { get; set; }
        public Marcas IdMarcaNavigation { get; set; }
        public Proveedor IdProveedorNavigation { get; set; }
        public Empleado IdResponsableNavigation { get; set; }
        public FormularioIngreso NoFormularioNavigation { get; set; }
    }
}
