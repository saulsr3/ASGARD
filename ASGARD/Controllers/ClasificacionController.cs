using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASGARD.Models;
using ASGARD.Clases;
using Microsoft.AspNetCore.Mvc;


namespace ASGARD.Controllers
{
    public class ClasificacionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        [Route("api/Clasificacion/guardarClasificacion")]
        public int guardarClasificacion([FromBody]ClasificacionAF oClasificacionAF)
        {
            int respuesta = 0;

            try
            {
                using (BDAcaassAFContext bd = new BDAcaassAFContext())
                {
                    Clasificacion oClasificacion = new Clasificacion();

                    oClasificacion.IdClasificacion = oClasificacionAF.idclasificacion;
                    oClasificacion.Correlativo = oClasificacionAF.correlativo;
                    oClasificacion.Clasificacion1 = oClasificacionAF.clasificacion;
                    oClasificacion.Descripcion = oClasificacionAF.descripcion;
                    oClasificacion.Dhabilitado = 1;
                    bd.Clasificacion.Add(oClasificacion);
                    bd.SaveChanges();
                    respuesta = 1;




                }

            }
            catch (Exception ex)
            {
                respuesta = 0;
            }



            return respuesta;
        }

        // metodo para listar las clasificaciones de los activos
        [HttpGet]
        [Route("api/Clasificacion/listarClasificacion")]
        public IEnumerable<ClasificacionAF> listarClasificacion()
        {
            using (BDAcaassAFContext bd = new BDAcaassAFContext())
            {
                IEnumerable<ClasificacionAF> listaClasificacion = (from clasificacion in bd.Clasificacion
                                                                   where clasificacion.Dhabilitado == 1
                                                                   select new ClasificacionAF
                                                                   {
                                                                       idclasificacion = clasificacion.IdClasificacion,
                                                                       correlativo = clasificacion.Correlativo,
                                                                       clasificacion = clasificacion.Clasificacion1,
                                                                       descripcion = clasificacion.Descripcion

                                                                   }).ToList();
                return listaClasificacion;
            }
        }


        [HttpGet]
        [Route("api/Clasificacion/eliminarCasificacion/{idclasificacion}")]
        public int eliminarCasificacion(int idclasificacion)
        {
            int respuesta = 0;

            try
            {
                using (BDAcaassAFContext bd = new BDAcaassAFContext())
                {
                    Clasificacion oClasificacion = bd.Clasificacion.Where(p => p.IdClasificacion == idclasificacion).First();
                    oClasificacion.Dhabilitado = 0;
                    bd.SaveChanges();
                    respuesta = 1;
                }


            }
            catch (Exception ex)
            {

                respuesta = 0;
            }
            return respuesta;
        }
    }
}