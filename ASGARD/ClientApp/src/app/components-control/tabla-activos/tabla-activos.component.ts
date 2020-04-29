import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from './../../services/cargar-scripts.service';
@Component({
  selector: 'app-tabla-activos',
  templateUrl: './tabla-activos.component.html',
  styleUrls: ['./tabla-activos.component.css']
})
export class TablaActivosComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService) {
    _CargaScripts.cargar(['/advanced-datatable/media/js/jquery','/advanced-datatable/media/js/jquery.dataTables',
    '/respond.min','/sortingTable']);
   }
 
  ngOnInit() {
  }

}
