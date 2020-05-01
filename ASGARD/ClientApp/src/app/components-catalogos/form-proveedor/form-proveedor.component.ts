import { Component, OnInit } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.css']
})
export class FormProveedorComponent implements OnInit {

  proveedores: FormGroup;

  constructor(private catalogoService: CatalogosService) {

    this.proveedores = new FormGroup({

      //'idProveedor': new FormControl("0"),
      'nombre': new FormControl("", [Validators.required]),
      'direccion': new FormControl("", [Validators.required]),
      'telefono': new FormControl("", [Validators.required]),
      'rubro': new FormControl(""),
      'encargado': new FormControl(""),
      'telefonoencargado': new FormControl("")


    });
  }

  ngOnInit() {
  }

  //Método

  guardarDatos() {

    if (this.proveedores.valid == true) {
      this.catalogoService.agregarProveedor(this.proveedores.value).subscribe(data => { });
    }

  }




}
