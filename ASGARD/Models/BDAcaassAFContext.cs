using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ASGARD.Models
{
    public partial class BDAcaassAFContext : DbContext
    {
        public BDAcaassAFContext()
        {
        }

        public BDAcaassAFContext(DbContextOptions<BDAcaassAFContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ActivoFijo> ActivoFijo { get; set; }
        public virtual DbSet<AreaDeNegocio> AreaDeNegocio { get; set; }
        public virtual DbSet<Bitacora> Bitacora { get; set; }
        public virtual DbSet<Cargos> Cargos { get; set; }
        public virtual DbSet<Clasificacion> Clasificacion { get; set; }
        public virtual DbSet<Donantes> Donantes { get; set; }
        public virtual DbSet<Empleado> Empleado { get; set; }
        public virtual DbSet<FormularioIngreso> FormularioIngreso { get; set; }
        public virtual DbSet<Marcas> Marcas { get; set; }
        public virtual DbSet<Proveedor> Proveedor { get; set; }
        public virtual DbSet<SolicitudMantenimiento> SolicitudMantenimiento { get; set; }
        public virtual DbSet<Sucursal> Sucursal { get; set; }
        public virtual DbSet<Tecnicos> Tecnicos { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        // Unable to generate entity type for table 'dbo.Bien_Mantenimiento'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=DBAcaassAF;database=BDAcaassAF;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ActivoFijo>(entity =>
            {
                entity.HasKey(e => e.CodigoBien);

                entity.Property(e => e.CodigoBien)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.Desripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DestinoInicial)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EstadoIngreso)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Foto).HasColumnType("image");

                entity.Property(e => e.IdResponsable)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Modelo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PlazoPago)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdAreaDeNegocioNavigation)
                    .WithMany(p => p.ActivoFijo)
                    .HasForeignKey(d => d.IdAreaDeNegocio)
                    .HasConstraintName("FK__ActivoFij__IdAre__4316F928");

                entity.HasOne(d => d.IdClasificacionNavigation)
                    .WithMany(p => p.ActivoFijo)
                    .HasForeignKey(d => d.IdClasificacion)
                    .HasConstraintName("FK__ActivoFij__IdCla__412EB0B6");

                entity.HasOne(d => d.IdDonanteNavigation)
                    .WithMany(p => p.ActivoFijo)
                    .HasForeignKey(d => d.IdDonante)
                    .HasConstraintName("FK__ActivoFij__IdDon__44FF419A");

                entity.HasOne(d => d.IdMarcaNavigation)
                    .WithMany(p => p.ActivoFijo)
                    .HasForeignKey(d => d.IdMarca)
                    .HasConstraintName("FK__ActivoFij__IdMar__440B1D61");

                entity.HasOne(d => d.IdProveedorNavigation)
                    .WithMany(p => p.ActivoFijo)
                    .HasForeignKey(d => d.IdProveedor)
                    .HasConstraintName("FK__ActivoFij__IdPro__45F365D3");

                entity.HasOne(d => d.IdResponsableNavigation)
                    .WithMany(p => p.ActivoFijo)
                    .HasForeignKey(d => d.IdResponsable)
                    .HasConstraintName("FK__ActivoFij__IdRes__46E78A0C");

                entity.HasOne(d => d.NoFormularioNavigation)
                    .WithMany(p => p.ActivoFijo)
                    .HasForeignKey(d => d.NoFormulario)
                    .HasConstraintName("FK__ActivoFij__NoFor__4222D4EF");
            });

            modelBuilder.Entity<AreaDeNegocio>(entity =>
            {
                entity.HasKey(e => e.IdAreaNegocio);

                entity.Property(e => e.IdAreaNegocio).ValueGeneratedNever();

                entity.Property(e => e.Correlativo)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdSucursalNavigation)
                    .WithMany(p => p.AreaDeNegocio)
                    .HasForeignKey(d => d.IdSucursal)
                    .HasConstraintName("FK__AreaDeNeg__IdSuc__3F466844");
            });

            modelBuilder.Entity<Bitacora>(entity =>
            {
                entity.HasKey(e => e.IdBitacora);

                entity.Property(e => e.IdBitacora).ValueGeneratedNever();

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Fecha).HasColumnType("datetime");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Bitacora)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Bitacora__IdUsua__49C3F6B7");
            });

            modelBuilder.Entity<Cargos>(entity =>
            {
                entity.HasKey(e => e.IdCargo);

                entity.Property(e => e.IdCargo).ValueGeneratedNever();

                entity.Property(e => e.Cargo)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Direccion)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Clasificacion>(entity =>
            {
                entity.HasKey(e => e.IdClasificacion);

                entity.Property(e => e.IdClasificacion).ValueGeneratedNever();

                entity.Property(e => e.Clasificacion1)
                    .HasColumnName("Clasificacion")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Correlativo)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Donantes>(entity =>
            {
                entity.HasKey(e => e.IdDonante);

                entity.Property(e => e.IdDonante).ValueGeneratedNever();

                entity.Property(e => e.Direccion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Empleado>(entity =>
            {
                entity.HasKey(e => e.Dui);

                entity.Property(e => e.Dui)
                    .HasColumnName("DUI")
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.Apellidos)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BtieneUsuario).HasColumnName("BTieneUsuario");

                entity.Property(e => e.Direccion)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Nombres)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.TelefonoPersonal)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdAreaDeNegocioNavigation)
                    .WithMany(p => p.Empleado)
                    .HasForeignKey(d => d.IdAreaDeNegocio)
                    .HasConstraintName("FK__Empleado__IdArea__4CA06362");

                entity.HasOne(d => d.IdCargoNavigation)
                    .WithMany(p => p.Empleado)
                    .HasForeignKey(d => d.IdCargo)
                    .HasConstraintName("FK__Empleado__IdCarg__403A8C7D");
            });

            modelBuilder.Entity<FormularioIngreso>(entity =>
            {
                entity.HasKey(e => e.NoFormulario);

                entity.Property(e => e.NoFormulario).ValueGeneratedNever();

                entity.Property(e => e.FechaIngreso).HasColumnType("datetime");

                entity.Property(e => e.NoFactura)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Observaciones)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.PersonaEntrega)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.PersonaRecibe)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Marcas>(entity =>
            {
                entity.HasKey(e => e.IdMarca);

                entity.Property(e => e.IdMarca).ValueGeneratedNever();

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Marca)
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Proveedor>(entity =>
            {
                entity.HasKey(e => e.IdProveedor);

                entity.Property(e => e.IdProveedor).ValueGeneratedNever();

                entity.Property(e => e.Direccion)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Encargado)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Rubro)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.TelefonoEncargado)
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SolicitudMantenimiento>(entity =>
            {
                entity.HasKey(e => e.IdSolicitud);

                entity.Property(e => e.IdSolicitud).ValueGeneratedNever();

                entity.Property(e => e.Fecha)
                    .HasColumnName("fecha")
                    .HasColumnType("datetime");

                entity.Property(e => e.Folio).HasColumnName("folio");
            });

            modelBuilder.Entity<Sucursal>(entity =>
            {
                entity.HasKey(e => e.IdSucursal);

                entity.Property(e => e.IdSucursal).ValueGeneratedNever();

                entity.Property(e => e.Correlativo)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Ubicacion)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tecnicos>(entity =>
            {
                entity.HasKey(e => e.IdTecnico);

                entity.Property(e => e.IdTecnico).ValueGeneratedNever();

                entity.Property(e => e.Empresa)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario);

                entity.Property(e => e.IdTipoUsuario).ValueGeneratedNever();

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TipoUsuario1)
                    .HasColumnName("TipoUsuario")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario);

                entity.Property(e => e.IdUsuario).ValueGeneratedNever();

                entity.Property(e => e.Contra)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.IdEmpleado)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.NombreUsuario)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdEmpleadoNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdEmpleado)
                    .HasConstraintName("FK__Usuario__IdEmple__47DBAE45");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__IdTipoU__48CFD27E");
            });
        }
    }
}
