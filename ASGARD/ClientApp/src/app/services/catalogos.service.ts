import { Injectable, Inject  } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CatalogosService {
    urlBase: string = "";
    constructor(private http: Http, @Inject("BASE_URL") baseUrl: string) {
        this.urlBase = baseUrl;
    }
    //Servicios para marcas
    public getMarcas() {
        return this.http.get(this.urlBase + "api/Marcas/listarMarcas").map(res => res.json());
    }
    public setMarca(marca) {
        return this.http.post(this.urlBase + "api/Marcas/guardarMarca", marca).map(res => res.json());
    }
    public eliminarMarca(idMarca) {
        return this.http.get(this.urlBase + "api/Marcas/eliminarMarca/" + idMarca).map(res => res.json());
    }
    public buscarMarca(buscador) {
        return this.http.get(this.urlBase + "api/Marca/buscarMarca/" + buscador).map(res => res.json());
    }
    public recuperarMarcas(id) {
        return this.http.get(this.urlBase + "api/Marcas/RecuperarMarca/" + id).map(res => res.json());
    }
    public updateMarca(marca) {
        return this.http.post(this.urlBase + "api/Marca/modificarMarca", marca).map(res => res.json());
    }
    
    //Servicios Sucursales

    public getSucursales() {
        return this.http.get(this.urlBase + "api/Sucursal/listarSucursales").map(res => res.json());
    }
    public setSucursal(sucursal) {
        return this.http.post(this.urlBase + "api/Sucursal/guardarSucursal", sucursal).map(res => res.json());
    }
    public deleteSucursal(idSucursal) {
        return this.http.get(this.urlBase + "api/Marcas/eliminarSucursal/" + idSucursal).map(res => res.json());
    }
    public buscarSucursal(buscador) {
      return this.http.get(this.urlBase + "api/Sucursal/buscarSucursal/" + buscador).map(res => res.json());
  }
  public validarCorrelativoSucursal(idSucursal, correlativo){
    return this.http.get(this.urlBase + "api/Sucursal/validarCorrelativo/" + idSucursal+ "/"+ correlativo).map(res => res.json());
  }

  //Service Cargo

  public agregarCargo(cargo) {
    return this.http.post(this.urlBase + "api/Cargo/guardarCargo", cargo).map(res => res.json());
  }


  //Service Donantes

  public agregarDonante(donante) {
    return this.http.post(this.urlBase + "api/Donantes/guardarDonante", donante).map(res => res.json());
  }
  public getDonantes() {
    return this.http.get(this.urlBase + "api/Donantes/listarDonantes").map(res => res.json());
  }

  public RecuperarDonante(idDonante) {
    return this.http.get(this.urlBase + "api/Donantes/RecuperarDonante/" + idDonante).map(res => res.json());
  }

  public updateDonante(donante) {
    return this.http.post(this.urlBase + "api/Donantes/modificarDonante", donante).map(res => res.json());
  }

  public eliminarDonante(idDonante) {
    return this.http.get(this.urlBase + "api/Donantes/eliminarDonante/" + idDonante).map(res => res.json());
  }

  public buscarDonante(buscador) {
    return this.http.get(this.urlBase + "api/Donantes/buscarDonantes/" + buscador).map(res => res.json());
  }


  //Servicio de Clasificacion de activos

  public guardarClasificacion(clasificacion) {
    return this.http.post(this.urlBase + "api/Clasificacion/guardarClasificacion", clasificacion).map(res => res.json());
}



  //servicio que enlista la clasificacion de los activos
  public getClasificacion() {
    return this.http.get(this.urlBase + "api/Clasificacion/listarClasificacion").map(res => res.json());
  }


  //para eliminar los registros de clasificacion de acitvo

  public eliminarCasificacion(idclasificacion) {
    return this.http.get(this.urlBase + "api/Clasificacion/eliminarCasificacion/" + idclasificacion).map(res => res.json());
  }

  buscarClasificacion(buscador) {
    return this.http.get(this.urlBase + "api/Clasificacion/buscarClasificacion/" + buscador).map(res => res.json());
  }

  public RecuperarClasificacion(id) {
    return this.http.get(this.urlBase + "api/Clasificacion/RecuperarClasificacion/" + id).map(res => res.json());
  }
  public modificarclasificacion(clasificacion) {
    return this.http.post(this.urlBase + "api/Clasificacion/modificarclasificacion", clasificacion).map(res => res.json());
  }

  public validarCorrelativo(idclasificacion, correlativo){
    return this.http.get(this.urlBase + "api/Clasificacion/validarCorrelativo/" + idclasificacion+ "/"+ correlativo).map(res => res.json());
  }

  public validarClasificacion (idclasificacion, clasificacion){
    return this.http.get(this.urlBase + "api/Clasificacion/validarClasificacion/" + idclasificacion+ "/"+ clasificacion).map(res => res.json());
  }

  //SERVICIOS PARA PROVEEDOR

  public agregarProveedor(proveedor) {
    return this.http.post(this.urlBase + "api/Proveedor/guardarProveedor", proveedor).map(res => res.json());
  }
  public getProveedores() {
    return this.http.get(this.urlBase + "api/Proveedor/listarProveedores").map(res => res.json());
  }
  public recuperarProveedores(id) {
    return this.http.get(this.urlBase + "api/Proveedor/RecuperarProveedor/" + id).map(res => res.json());
  }
  public eliminarProveedor(idProveedor) {
    return this.http.get(this.urlBase + "api/Proveedor/eliminarProveedor/" + idProveedor).map(res => res.json());
  }
  public buscarProveedor(buscador) {
    return this.http.get(this.urlBase + "api/Proveedor/buscarProveedor/" + buscador).map(res => res.json());
  }
  public ActualizarProveedor(proveedor) {
    return this.http.post(this.urlBase + "api/Proveedor/modificarProveedor", proveedor).map(res => res.json());
  }



}
