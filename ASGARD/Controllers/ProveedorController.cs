using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASGARD.Clases;
using ASGARD.Models;

namespace ASGARD.Controllers
{
    public class ProveedorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/Proveedor/listarProveedores")]
        public IEnumerable<ProveedoresAF> listarProveedores()
        {
            using (BDAcaassAFContext bd = new BDAcaassAFContext())
            {
                IEnumerable<ProveedoresAF> listarProveedores = (from proveedor in bd.Proveedor
                                                     where proveedor.Dhabilitado == 1
                                                     select new ProveedoresAF
                                                     {
                                                        idProveedor = proveedor.IdProveedor,
                                                        Nombre = proveedor.Nombre,
                                                        Direccion = proveedor.Direccion,
                                                        Telefono = proveedor.Telefono,
                                                        Rubro = proveedor.Rubro,
                                                        Encargado = proveedor.Encargado,
                                                        TelefonoEncargado = proveedor.TelefonoEncargado
                                                     }).ToList();
                return listarProveedores;
            }
        }

    }
}