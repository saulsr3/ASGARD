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
        [HttpPost]
        [Route("api/Marcas/guardarMarca")]
        public int guardarMarca([FromBody]MarcasAF oMarcaAF)
        {
            int res = 0;
            try
            {
                using (BDAcaassAFContext bd = new BDAcaassAFContext())
                {
                    Marcas oMarca = new Marcas();
                    oMarca.IdMarca = oMarcaAF.IdMarca;
                    oMarca.Marca = oMarcaAF.Marca;
                    oMarca.Descripcion = oMarcaAF.Descripcion;
                    oMarca.Dhabilitado = 1;
                    bd.Marcas.Add(oMarca);
                    bd.SaveChanges();
                    res= 1;
                }
            }
            catch (Exception ex)
            {
                res = 0;
            }
            return res;
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
        [HttpGet]
        [Route("api/Marcas/eliminarMarca/{idMarca}")]
        public int eliminarMarca(int idMarca)
        {
            int res = 0;
            try
            {
                using (BDAcaassAFContext bd = new BDAcaassAFContext())
                {
                    Marcas oMarca = bd.Marcas.Where(p => p.IdMarca == idMarca).First();
                    oMarca.Dhabilitado = 0;
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
        [Route("api/Marcas/RecuperarMarca/{id}")]
        public MarcasAF RecuperarMarca(int id)
        {
            using (BDAcaassAFContext bd = new BDAcaassAFContext())
            {
                MarcasAF oMarcaAF = new MarcasAF();
                Marcas oMarca = bd.Marcas.Where(p => p.IdMarca == id).First();
                oMarcaAF.IdMarca = oMarca.IdMarca;
                oMarcaAF.Marca = oMarca.Marca;
                oMarcaAF.Descripcion = oMarca.Descripcion;
                return oMarcaAF;
            }
        }
        [HttpGet]
        [Route("api/Marca/buscarMarca/{buscador?}")]
        public IEnumerable<MarcasAF> buscarMarca(string buscador = "")
        {
            List<MarcasAF> listaMarca;
            using (BDAcaassAFContext bd = new BDAcaassAFContext())
            {
                if (buscador == "")
                {
                    listaMarca = (from marca in bd.Marcas
                                    where marca.Dhabilitado == 1
                                    select new MarcasAF
                                    {
                                        IdMarca = marca.IdMarca,
                                        Marca = marca.Marca,
                                        Descripcion = marca.Descripcion
                                    }).ToList();
                    return listaMarca;
                }
                else
                {
                    listaMarca = (from marca in bd.Marcas
                                    where marca.Dhabilitado == 1
                                   
                                    && ((marca.IdMarca).ToString().Contains(buscador)||(marca.Marca).ToLower().Contains(buscador.ToLower())|| (marca.Descripcion).ToLower().Contains(buscador.ToLower()))
                                    select new MarcasAF
                                    {
                                        IdMarca = marca.IdMarca,
                                        Marca = marca.Marca,
                                        Descripcion = marca.Descripcion
                                    }).ToList();
                    return listaMarca;
                }
            }
        }
    }
}