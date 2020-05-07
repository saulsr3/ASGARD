--use master
--go
--drop database BDAcaassAF
--go

CREATE DATABASE BDAcaassAF
go
use BDAcaassAF
CREATE TABLE Sucursal(
IdSucursal int NOT NULL PRIMARY KEY IDENTITY(1,1),
Nombre VARCHAR(50),
Ubicacion VARCHAR(100),
Correlativo varchar(10),
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE AreaDeNegocio(
IdAreaNegocio int NOT NULL PRIMARY KEY IDENTITY(1,1),
Nombre VARCHAR(50),
IdSucursal int,
Correlativo varchar(10),
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE Clasificacion(
IdClasificacion int NOT NULL PRIMARY KEY IDENTITY(1,1),
Clasificacion varchar(50),
Correlativo varchar(10),
Descripcion varchar(100),
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE Marcas(
IdMarca int NOT NULL PRIMARY KEY IDENTITY(1,1),
Marca varchar(25),
Descripcion varchar(100),
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE Tecnicos(
IdTecnico int NOT NULL PRIMARY KEY IDENTITY(1,1),
Nombre varchar(100),
Empresa varchar(50),
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE Donantes(
IdDonante int NOT NULL PRIMARY KEY IDENTITY(1,1),
Nombre varchar(100),
Telefono varchar(50),
Direccion varchar(100),
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE Cargos(
IdCargo int NOT NULL PRIMARY KEY IDENTITY(1,1),
Cargo varchar(25),
Direccion varchar(100),
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE Empleado(
DUI varchar(10) PRIMARY KEY,
Nombres varchar(50),
Apellidos varchar(50),
Direccion varchar(25),
Telefono varchar(25),
TelefonoPersonal varchar(25),
IdAreaDeNegocio int,
IdCargo int,
BTieneUsuario int,
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE Proveedor(
IdProveedor int NOT NULL PRIMARY KEY IDENTITY(1,1),
Nombre varchar(50),
Direccion varchar(25),
Telefono varchar(25),
Rubro varchar(25),
Encargado varchar(25),
TelefonoEncargado varchar(25),
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE TipoUsuario(
IdTipoUsuario int NOT NULL PRIMARY KEY IDENTITY(1,1),
TipoUsuario varchar(50),
Descripcion varchar(100),
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE Usuario(
IdUsuario int NOT NULL PRIMARY KEY IDENTITY(1,1),
NombreUsuario varchar(50),
Contra varchar(50),
IdEmpleado varchar(10),
IdTipoUsuario int,
Dhabilitado int
)
GO
use BDAcaassAF
CREATE TABLE Bitacora(
IdBitacora int NOT NULL PRIMARY KEY IDENTITY(1,1),
IdUsuario int,
Fecha datetime,
Descripcion varchar(50)
)
GO
use BDAcaassAF
CREATE TABLE FormularioIngreso(
NoFormulario int NOT NULL PRIMARY KEY IDENTITY(1,1),
NoFactura varchar(10),
FechaIngreso datetime,
Cantidad int,
PersonaEntrega varchar(100),
PersonaRecibe varchar(100),
Observaciones varchar(100)
)
GO
use BDAcaassAF
CREATE TABLE ActivoFijo(
CodigoBien varchar(10) PRIMARY KEY,
NoFormulario int,
Desripcion varchar(100),
EstadoIngreso varchar(20), 
IdClasificacion int,
IdAreaDeNegocio int,
IdMarca int,
Modelo varchar(50),
IdProveedor int,
IdDonante int,
CostoAdquicicion float,
PlazoPago varchar(50),
CuotaAsignanda float,
IdResponsable varchar(10),
DestinoInicial varchar(50),
Foto image,
Dhabilitado int
)
go
use BDAcaassAF
CREATE TABLE SolicitudMantenimiento(
IdSolicitud int NOT NULL PRIMARY KEY IDENTITY(1,1),
fecha datetime,
folio int
)
go
use BDAcaassAF
CREATE TABLE Bien_Mantenimiento(
IdSolicitud int NOT NULL PRIMARY KEY IDENTITY(1,1),
IdBien varchar(10)
)
GO
USE BDAcaassAF
ALTER TABLE AreaDeNegocio
ADD FOREIGN KEY(IdSucursal) REFERENCES Sucursal
GO
USE BDAcaassAF
ALTER TABLE Empleado
ADD FOREIGN KEY(IdCargo) REFERENCES Cargos
GO
USE BDAcaassAF
ALTER TABLE ActivoFijo
ADD FOREIGN KEY(IdClasificacion) REFERENCES Clasificacion
GO
USE BDAcaassAF
ALTER TABLE ActivoFijo
ADD FOREIGN KEY(NoFormulario) REFERENCES FormularioIngreso
GO
USE BDAcaassAF
ALTER TABLE ActivoFijo
ADD FOREIGN KEY(IdAreaDeNegocio) REFERENCES AreaDeNegocio
GO
USE BDAcaassAF
ALTER TABLE ActivoFijo
ADD FOREIGN KEY(IdMarca) REFERENCES Marcas
GO
USE BDAcaassAF
ALTER TABLE ActivoFijo
ADD FOREIGN KEY(IdDonante) REFERENCES Donantes
GO
USE BDAcaassAF
ALTER TABLE ActivoFijo
ADD FOREIGN KEY(IdProveedor) REFERENCES Proveedor
GO
USE BDAcaassAF
ALTER TABLE ActivoFijo
ADD FOREIGN KEY(IdResponsable) REFERENCES Empleado
GO
USE BDAcaassAF
ALTER TABLE Usuario
ADD FOREIGN KEY(IdEmpleado) REFERENCES Empleado
GO
USE BDAcaassAF
ALTER TABLE Usuario
ADD FOREIGN KEY(IdTipoUsuario) REFERENCES TipoUsuario
GO
USE BDAcaassAF
ALTER TABLE Bitacora
ADD FOREIGN KEY(IdUsuario) REFERENCES Usuario
GO
USE BDAcaassAF
ALTER TABLE Bien_Mantenimiento
ADD FOREIGN KEY(IdSolicitud) REFERENCES SolicitudMantenimiento
GO
USE BDAcaassAF
ALTER TABLE Bien_mantenimiento
ADD FOREIGN KEY(IdBien) REFERENCES ActivoFijo
GO
ALTER TABLE Empleado
ADD FOREIGN KEY(IdAreaDeNegocio) REFERENCES AreaDeNegocio
GO


