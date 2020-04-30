import { Component, OnInit } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-donantes',
  templateUrl: './form-donantes.component.html',
  styleUrls: ['./form-donantes.component.css']
})
export class FormDonantesComponent implements OnInit {

  //Variables

  donantes: FormGroup;

  constructor(private catalogoService: CatalogosService) {

    this.donantes = new FormGroup({

      'IidDonante': new FormControl("0"),
      'nombre': new FormControl(""),
      'telefono': new FormControl(""),
      'direccion': new FormControl("")

    });
  }

  ngOnInit() {
  }

  //Métodos

  guardarDatos() {

    if (this.donantes.valid == true) {
      this.catalogoService.agregarDonante(this.donantes.value).subscribe(data => { });
    }

  }

}
