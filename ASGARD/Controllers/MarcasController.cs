using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASGARD.Clases;
using ASGARD.Models;


namespace ASGARD.Controllers
{
    public class MarcasController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        [Route("api/Marcas/listarMarcas")]
        public IEnumerable<MarcasAF> listarMarcas()
        {
            using (BDAcaassAFContext bd = new BDAcaassAFContext())
            {
                IEnumerable<MarcasAF> listaMarcas = (from marca in bd.Marcas
                                                      where marca.Dhabilitado == 1
                                                      select new MarcasAF
                                                      {
                                                          IdMarca = marca.IdMarca,
                                                          Marca = marca.Marca,
                                                          Descripcion = marca.Descripcion
                                                      }).ToList();
                return listaMarcas;
            }
        }
    }
}