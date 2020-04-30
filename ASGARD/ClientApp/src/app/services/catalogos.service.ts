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
    //Sugiero que aqui trabajemos todos los catalogos solo que llevemos un orden con un comentario por cada uno
    //Servicios para marcas

    public getMarcas() {
        return this.http.get(this.urlBase + "api/Marcas/listarMarcas").map(res => res.json());
    }

    //Servicios Sucursales
    public getSucursales() {
        return this.http.get(this.urlBase + "api/Sucursal/listarSucursales").map(res => res.json());
    }
    //Servicios Empleados

    //Servicios Cargos
}
