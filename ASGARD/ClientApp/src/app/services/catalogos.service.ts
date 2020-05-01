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

}
