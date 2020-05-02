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
        return this.http.get(this.urlBase + "api/Persona/buscarMarca/" + buscador).map(res => res.json());
    }
    
    //Servicios Sucursales
    public getSucursales() {
        return this.http.get(this.urlBase + "api/Sucursal/listarSucursales").map(res => res.json());
    }
  //Service Donantes
  public agregarDonante(donante) {
    return this.http.post(this.urlBase + "api/Donantes/guardarDonante", donante).map(res => res.json());
  }
  public getDonantes() {
    return this.http.get(this.urlBase + "api/Donantes/listarDonantes").map(res => res.json());
  }
    //Servicios Proveeodres
    public getProveedores() {
        return this.http.get(this.urlBase + "api/Proveedor/listarProveedores").map(res => res.json());
  }

  //Servicio de Clasificacion de activos

  public guardarClasificacion(clasificacion) {
    return this.http.post(this.urlBase + "api/Clasificacion/guardarClasificacion", clasificacion).map(res => res.json());
}

  public agregarProveedor(proveedor) {
    return this.http.post(this.urlBase + "api/Proveedor/guardarProveedor", proveedor).map(res => res.json());
  }

  //servicio que enlista la clasificacion de los activos
  public getClasificacion() {
    return this.http.get(this.urlBase + "api/Clasificacion/listarClasificacion").map(res => res.json());
  }

  //para eliminar los registros de clasificacion de acitvo
  public eliminarCasificacion(idclasificacin) {
    return this.http.get(this.urlBase + "api/Clasificacion/eliminarCasificacion/" + idclasificacin).map(res => res.json());
  }

}
