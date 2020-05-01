import { Component, OnInit } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-clasificacion',
  templateUrl: './form-clasificacion.component.html',
  styleUrls: ['./form-clasificacion.component.css']
})
export class FormClasificacionComponent implements OnInit {
  //marcas: any;
  //p: number = 1;
  clasificacion: FormGroup;
  constructor(private catalogosServices: CatalogosService) {
    this.clasificacion = new FormGroup({
      'idclasificacion': new FormControl("0"),
      'clasificacion': new FormControl("", [Validators.required]),
      'correlativo': new FormControl("", [Validators.required]),
      'descripcion': new FormControl("", [Validators.required])

    });



}

  ngOnInit() {
  }

guardarDatos() {

  if (this.clasificacion.valid == true)
  {
    this.catalogosServices.guardarClasificacion(this.clasificacion.value).subscribe(data => { })
  }

}
}
