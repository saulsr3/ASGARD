import { Component, OnInit } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { CargarScriptsService } from './../../services/cargar-scripts.service';
@Component({
  selector: 'app-form-sucursal',
  templateUrl: './form-sucursal.component.html',
  styleUrls: ['./form-sucursal.component.css']
})
export class FormSucursalComponent implements OnInit {
    sucursales: any;
    constructor(private catalogoService: CatalogosService, private _CargaScripts: CargarScriptsService) {
        _CargaScripts.cargar(['/respond.min', '/sortingTable']);
    }

    ngOnInit() {
        this.catalogoService.getSucursales().subscribe(res => this.sucursales = res);
  }

}
