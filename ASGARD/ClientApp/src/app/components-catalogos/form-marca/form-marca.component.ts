import { Component, OnInit, Input } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';

@Component({
  selector: 'app-form-marca',
  templateUrl: './form-marca.component.html',
  styleUrls: ['./form-marca.component.css']
})
export class FormMarcaComponent implements OnInit {
  marcas: any;
    constructor(private catalogoService: CatalogosService) {
       
    }

    ngOnInit() {
       
        this.catalogoService.getMarcas().subscribe(res => this.marcas = res);
       
  }

}
