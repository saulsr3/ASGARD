import { Component, OnInit } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';

@Component({
    selector: 'app-tabla-marcas',
    templateUrl: './tabla-marcas.component.html',
    styleUrls: ['./tabla-marcas.component.css']
})
export class TablaMarcasComponent implements OnInit {
    //marcas: any;
    //p: number = 1;
    constructor(private catalogoService: CatalogosService) {
       
    }
    ngOnInit() {
        this.catalogoService.getMarcas().subscribe(res => this.marcas = res);
    }
}
