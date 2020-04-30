﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASGARD.Clases;
using ASGARD.Models;

namespace ASGARD.Controllers
{
    public class DonantesController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }

        //Método guardar Donantes
        [HttpPost]
        [Route("api/Donantes/guardarDonante")]
        public int guardarDonante([FromBody]DonantesAF oDonantesAF)
        {
            int rpta = 0;

            try
            {
                using(BDAcaassAFContext bd=new BDAcaassAFContext())
                {
                    Donantes oDonantes = new Donantes();
                    oDonantes.IdDonante = oDonantesAF.IidDonante;
                    oDonantes.Nombre = oDonantesAF.nombre;
                    oDonantes.Telefono = oDonantesAF.telefono;
                    oDonantes.Direccion = oDonantesAF.direccion;
                    oDonantes.Dhabilitado = 1;

                    bd.Donantes.Add(oDonantes);
                    bd.SaveChanges();
                    rpta = 1;
                }

            } catch(Exception ex)
            {
                rpta = 0;
            }



            return rpta;
        }

    }
}