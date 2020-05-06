import { Component, OnInit, Input } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-tabla-marcas',
    templateUrl: './tabla-marcas.component.html',
    styleUrls: ['./tabla-marcas.component.css']
})
export class TablaMarcasComponent implements OnInit {
    @Input() marcas: any;
    marca: FormGroup;

    p: number = 1;
    display = 'none';
    constructor(private catalogoService: CatalogosService) {
       
    }
    ngOnInit() {
        this.catalogoService.getMarcas().subscribe(res => this.marcas = res);
    }
    open() {
        this.display = 'block';
    }
    close() {
        this.display = 'none';
    }
    modif(id) {

  
    }
}
