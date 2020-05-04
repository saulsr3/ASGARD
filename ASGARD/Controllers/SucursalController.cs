using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASGARD.Clases;
using ASGARD.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASGARD.Controllers
{
    public class SucursalController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        [Route("api/Sucursal/listarSucursales")]
        public IEnumerable<SucursalAF> listarSucursales() {
            using (BDAcaassAFContext bd = new BDAcaassAFContext()) {
                IEnumerable<SucursalAF> listaSucursales = (from suscursal in bd.Sucursal
                                                           where suscursal.Dhabilitado == 1
                                                           select new SucursalAF
                                                           {
                                                               IdSucursal = suscursal.IdSucursal,
                                                               Nombre = suscursal.Nombre,
                                                               Ubicacion = suscursal.Ubicacion,
                                                               Correlativo = suscursal.Correlativo
                                                           }).ToList();
                return listaSucursales;
            }
        }
        [HttpPost]
        [Route("api/Sucursal/guardarSucursal")]
        public int guardarSucursal([FromBody]SucursalAF oSucursalAF)
        {
            int res = 0;
            try
            {
                using (BDAcaassAFContext bd = new BDAcaassAFContext())
                {
                    Sucursal oSucursal = new Sucursal();
                    oSucursal.IdSucursal = oSucursalAF.IdSucursal;
                    oSucursal.Nombre = oSucursalAF.Nombre;
                    oSucursal.Ubicacion = oSucursalAF.Ubicacion;
                    oSucursal.Correlativo = oSucursalAF.Correlativo;
                    oSucursal.Dhabilitado = 1;
                    bd.Sucursal.Add(oSucursal);
                    bd.SaveChanges();
                    res = 1;
                }
            }
            catch (Exception ex)
            {
                res = 0;
            }
            return res;
        }
        [HttpGet]
        [Route("api/Marcas/eliminarSucursal/{idSucursal}")]
        public int eliminarSucursal(int idSucursal)
        {
            int res = 0;
            try
            {
                using (BDAcaassAFContext bd = new BDAcaassAFContext())
                {
                    Sucursal oSucursal = bd.Sucursal.Where(p => p.IdSucursal == idSucursal).First();
                    oSucursal.Dhabilitado = 0;
                    bd.SaveChanges();
                    res = 1;
                }
            }
            catch (Exception ex)
            {
                res = 0;
            }
            return res;
        }
    } 
}