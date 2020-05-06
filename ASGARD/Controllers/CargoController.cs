using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASGARD.Clases;
using ASGARD.Models;


namespace ASGARD.Controllers
{
    public class CargoController : Controller
    {
  
        public IActionResult Index()
        {
            return View();
        }

        //Método guardar cargo
        [HttpPost]
        [Route("api/Cargo/guardarCargo")]
        public int guardarCargo([FromBody] CargoAF oCargoAF)
        {
            int rpta = 0;

            try
            {
                using(BDAcaassAFContext bd=new BDAcaassAFContext())
                {
                    Cargos oCargo = new Cargos();
                    oCargo.IdCargo = oCargoAF.idcargo;
                    oCargo.Cargo = oCargoAF.cargo;
                    oCargo.Direccion = oCargoAF.direccion;
                    oCargo.Dhabilitado = 1;
                    bd.Cargos.Add(oCargo);
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
