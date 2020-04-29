import { Component } from '@angular/core';
import {CargarScriptsService} from './../services/cargar-scripts.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent {
  constructor(private _CargaScripts:CargarScriptsService) {
    _CargaScripts.cargar(['/jquery.nicescroll']);
   }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
