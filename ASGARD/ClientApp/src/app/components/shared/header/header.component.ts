import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../../../services/cargar-scripts.service';
@Component({
  selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isExpanded = false;
    constructor(private _CargaScript: CargarScriptsService) {
        _CargaScript.cargar(['/jquery.nicescroll','/jquery.scrollTo.min']);
    }

  ngOnInit() {
  }
  collapse() {
    this.isExpanded = false;
  }

}
