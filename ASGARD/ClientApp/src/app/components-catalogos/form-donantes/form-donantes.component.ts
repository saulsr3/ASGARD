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
  dontes: any;
  p: number = 1;

  constructor(private catalogoService: CatalogosService) {

    this.donantes = new FormGroup({

      'IidDonante': new FormControl("0"),
      'nombre': new FormControl(""),
      'telefono': new FormControl(""),
      'direccion': new FormControl("")

    });
  }

  ngOnInit() {

    this.catalogoService.getDonantes().subscribe(data => { this.dontes = data });
  }

  //Métodos›

  guardarDatos() {

    if (this.donantes.valid == true) {
      this.catalogoService.agregarDonante(this.donantes.value).subscribe(data => { });
    }

  }

}
