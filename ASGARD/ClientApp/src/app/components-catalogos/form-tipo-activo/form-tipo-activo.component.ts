import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../../services/cargar-scripts.service';

@Component({
  selector: 'app-form-tipo-activo',
  templateUrl: './form-tipo-activo.component.html',
  styleUrls: ['./form-tipo-activo.component.css']
})
export class FormTipoActivoComponent implements OnInit {


    constructor(private _CargaScripts: CargarScriptsService) {
        _CargaScripts.cargar(['/advanced-datatable/media/js/jquery', '/advanced-datatable/media/js/jquery.dataTables',
            '/respond.min', '/sortingTable']);
    }

    

  ngOnInit() {
  }

}
