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

        //listar Proveedores
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
                                                                    nombre = proveedor.Nombre,
                                                                    direccion = proveedor.Direccion,
                                                                    telefono = proveedor.Telefono,
                                                                    rubro = proveedor.Rubro,
                                                                    encargado = proveedor.Encargado,
                                                                    telefonoencargado = proveedor.TelefonoEncargado
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
                    if (oProveedoresAF.idProveedor == 0)
                    {
                        Proveedor oProveedor = new Proveedor();
                       oProveedor.IdProveedor = oProveedoresAF.idProveedor;
                       oProveedor.Nombre = oProveedoresAF.nombre;
                       oProveedor.Direccion = oProveedoresAF.direccion;
                       oProveedor.Telefono = oProveedoresAF.telefono;
                       oProveedor.Rubro = oProveedoresAF.rubro;
                       oProveedor.Encargado = oProveedoresAF.encargado;
                       oProveedor.TelefonoEncargado = oProveedoresAF.telefonoencargado;
                       oProveedor.Dhabilitado = 1;

                    bd.Proveedor.Add(oProveedor);
                    bd.SaveChanges();
                    rpta = 1;
                }

                    //Editar Proveedor
                    else
                    {
                        //para editar tenemos que sacar la informacion
                        Proveedor oProveedor = bd.Proveedor.Where(p => p.IdProveedor == oProveedoresAF.idProveedor).First();
                        oProveedor.Nombre = oProveedoresAF.nombre;
                        oProveedor.Direccion = oProveedoresAF.direccion;
                        oProveedor.Telefono = oProveedoresAF.telefono;
                        oProveedor.Rubro = oProveedoresAF.rubro;
                        oProveedor.Encargado = oProveedoresAF.encargado;
                        oProveedor.TelefonoEncargado = oProveedoresAF.telefonoencargado;
                        //para guardar cambios
                        bd.SaveChanges();
                        //si todo esta bien
                        rpta = 1;
                    }
                    return rpta;
                }

            }
            
            catch (Exception ex)
            {
                return 0;
            }
            
        }

    }
}