import { Component, OnInit,  Input, ViewChild } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cargo',
  templateUrl: './form-cargo.component.html',
  styleUrls: ['./form-cargo.component.css']
})
export class FormCargoComponent implements OnInit {

  //Variables
  cargos: any;
  cargo: FormGroup;
  titulo: string;
  display='none';
  p:number=1;

  constructor( private catalogoService: CatalogosService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.cargo =new FormGroup( {

      'idCargo': new FormControl("0"),
      'bandera': new FormControl("0"),
      'cargo': new FormControl("", [Validators.required]),
      'direccion': new FormControl("", [Validators.required])

    });
 
   }

  ngOnInit() {
    this.catalogoService.getCargo().subscribe(data=> {this.cargos=data});

  }

  //Métodos 

  open() {
    //limpia cache 
    this.titulo = "Formulario Cargo";
    this.cargo.controls["idCargo"].setValue("0");
    this.cargo.controls["bandera"].setValue("0");
    this.cargo.controls["cargo"].setValue("");
    this.cargo.controls["direccion"].setValue("");
    this.display = 'block';
}
close() {
    this.display = 'none';
}

guardarDatos() {
  //Si la vandera es cero que es el que trae por defecto en el metodo open() entra en la primera a insertar

  if ((this.cargo.controls["bandera"].value) == "0") {
      if (this.cargo.valid == true) {
         //Método agregar de cargo
          this.catalogoService.agregarCargo(this.cargo.value).subscribe(data => { 
            //Método get de cargo
            this.catalogoService.getCargo().subscribe(data=> {this.cargos=data});
          });
         
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Dato Guardado con exito',
              showConfirmButton: false,
              timer: 3000
          })
      }
  } else {
     
      this.cargo.controls["bandera"].setValue("0");
      if(this.cargo.valid==true) {
        //Acá irá el método update
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Dato Modificado con exito',
          showConfirmButton: false,
          timer: 3000
      }) 
      }

  }
  this.cargo.controls["idCargo"].setValue("0");
  this.cargo.controls["bandera"].setValue("0");
  this.cargo.controls["cargo"].setValue("");
  this.cargo.controls["direccion"].setValue("");
  this.display = 'none';
  //Acá irá el método get de cargo
  this.catalogoService.getCargo().subscribe(data=> {this.cargos=data});
}

}
