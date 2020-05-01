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

      'IidProveedor': new FormControl("0"),
      'nombre': new FormControl("", [Validators.required]),
      'direccion': new FormControl("", [Validators.required]),
      'telefono': new FormControl("", [Validators.required]),
      'rubro': new FormControl("", [Validators.required]),
      'encargado': new FormControl("", [Validators.required]),
      'telencargado': new FormControl("", [Validators.required])
      

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
