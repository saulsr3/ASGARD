import { Component, OnInit } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';

@Component({
  selector: 'app-form-sucursal',
  templateUrl: './form-sucursal.component.html',
  styleUrls: ['./form-sucursal.component.css']
})
export class FormSucursalComponent implements OnInit {
    sucursales: any;
    p: number = 1;
    constructor(private catalogoService: CatalogosService) {
       
    }

    ngOnInit() {
        this.catalogoService.getSucursales().subscribe(res => this.sucursales = res);
  }

}
