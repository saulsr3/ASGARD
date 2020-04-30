import { Component, OnInit } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
@Component({
  selector: 'app-tabla-proveedor',
  templateUrl: './tabla-proveedor.component.html',
  styleUrls: ['./tabla-proveedor.component.css']
})
export class TablaProveedorComponent implements OnInit {

  proveedores: any;
  constructor(private catalogoService: CatalogosService) { }

  ngOnInit() {
    this.catalogoService.getProveedores().subscribe(res => this.proveedores = res);
  }

}
