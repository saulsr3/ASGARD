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


        //Método guardar Proveedores
        [HttpPost]
        [Route("api/Proveedor/guardarProveedor")]
        public int guardarProveedor([FromBody]ProveedoresAF oProveedoresAF)
        {
            int rpta = 0;

            try
            {
                using (BDAcaassAFContext bd = new BDAcaassAFContext())
                {
                    Proveedor oProveedor = new Proveedor();
                    oProveedor.IdProveedor = oProveedoresAF.idProveedor;
                    oProveedor.Nombre = oProveedoresAF.Nombre;
                    oProveedor.Direccion = oProveedoresAF.Direccion;
                    oProveedor.Telefono = oProveedoresAF.Telefono;
                    oProveedor.Rubro = oProveedoresAF.Rubro;
                    oProveedor.Encargado = oProveedoresAF.Encargado;
                    oProveedor.TelefonoEncargado= oProveedoresAF.TelefonoEncargado;
                    oProveedor.Dhabilitado = 1;

                    bd.Proveedor.Add(oProveedor);
                    bd.SaveChanges();
                    rpta = 1;
                }

            }
            catch (Exception ex)
            {
                rpta = 0;
            }
            return rpta;
        }


    }
}