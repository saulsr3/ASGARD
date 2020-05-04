using System;
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

        //Método listar donantes
        [HttpGet]
        [Route("api/Donantes/listarDonantes")]
        public IEnumerable<DonantesAF> listarDonantes()
        {
            using (BDAcaassAFContext bd = new BDAcaassAFContext())
            {
                IEnumerable<DonantesAF> listaDonantes = (from donante in bd.Donantes
                                                     where donante.Dhabilitado == 1
                                                     select new DonantesAF
                                                     {
                                                         IidDonante=donante.IdDonante,
                                                         nombre=donante.Nombre,
                                                         telefono=donante.Telefono,
                                                         direccion=donante.Direccion                                              
                                                     }).ToList();
                return listaDonantes;
            }
        }

        //Método recuperar donante
        [HttpGet]
        [Route("api/Donantes/RecuperarDonante/{idDonante}")]
        public DonantesAF RecuperarDonante(int idDonante)
        {
            using (BDAcaassAFContext bd=new BDAcaassAFContext())
            {
                DonantesAF oDonantesAF = new DonantesAF();

                Donantes oDonantes = bd.Donantes.Where(p => p.IdDonante == idDonante).First();

                oDonantes.IdDonante = oDonantes.IdDonante;
                oDonantesAF.nombre = oDonantes.Nombre;
                oDonantesAF.telefono = oDonantes.Telefono;
                oDonantesAF.direccion = oDonantes.Direccion;

                return oDonantesAF;
            }
        }
        
    

        //Método modificar donante
        [HttpPost]
        [Route("api/Donantes/modificarDonante")]
        public int modificarDonante([FromBody]DonantesAF oDonanteAF)
        {
            int rpta = 0;
            try
            {
                using (BDAcaassAFContext bd = new BDAcaassAFContext())
                {
                    Donantes oDonante = bd.Donantes.Where(p => p.IdDonante == oDonanteAF.IidDonante).First();
                    oDonante.IdDonante = oDonanteAF.IidDonante;
                    oDonante.Nombre = oDonanteAF.nombre;
                    oDonante.Telefono = oDonanteAF.telefono;
                    oDonante.Direccion = oDonanteAF.direccion;
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


        //Método eliminar donante
        [HttpGet]
        [Route("api/Donantes/eliminarDonante/{idDonante}")]
        public int eliminarDonante(int idDonante)
        {
            int rpta = 0;
            try
            {
                using(BDAcaassAFContext bd=new BDAcaassAFContext())
                {
                    Donantes oDonantes = bd.Donantes.Where(p => p.IdDonante == idDonante).First();
                    oDonantes.Dhabilitado = 0;
                    bd.SaveChanges();
                    rpta = 1;
                }

            }catch(Exception ex)
            {
                rpta = 0;
            }
            return rpta;
        }

    }
}
