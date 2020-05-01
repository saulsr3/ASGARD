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
    }
}