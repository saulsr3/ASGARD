import { Component } from '@angular/core';
import { CargarScriptsService } from './services/cargar-scripts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(private _CargaScript: CargarScriptsService) {
        _CargaScript.cargar(['/jquery.nicescroll', '/jquery.scrollTo.min']);
    }
}
