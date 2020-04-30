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
                                                               IdSucursal=suscursal.IdSucursal,
                                                               Nombre=suscursal.Nombre,
                                                               Correlativo=suscursal.Correlativo
                                                           }).ToList();
                return listaSucursales;
            }
        }
    }
}