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

      'idcargo': new FormControl("0"),
      'bandera': new FormControl("0"),
      'cargo': new FormControl("", [Validators.required, Validators.maxLength(25)]),
      'descripcion': new FormControl("", [Validators.required, Validators.maxLength(100)])

    });
 
   }

  ngOnInit() {
    this.catalogoService.getCargo().subscribe(data=> {this.cargos=data});

  }

  //Métodos   

  open() {
    //limpia cache  
    this.titulo = "Formulario Cargo";
    this.cargo.controls["idcargo"].setValue("0");
    this.cargo.controls["bandera"].setValue("0");
    this.cargo.controls["cargo"].setValue("");
    this.cargo.controls["descripcion"].setValue("");
    this.display = 'block';
}
close() {
    this.display = 'none';
}

guardarDatos() {
  //Si la vandera es cero que es el que trae por defecto en el metodo open() entra en la primera a insertar  

  if ((this.cargo.controls["bandera"].value) == "0") {
    if (this.cargo.valid == true) {
      this.catalogoService.agregarCargo(this.cargo.value).subscribe(data => {
        this.catalogoService.getCargo().subscribe(data => { this.cargos = data });
          });
         
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Dato Guardado con éxito',
              showConfirmButton: false,
              timer: 3000
          })
          this.catalogoService.getCargo().subscribe(data=> {this.cargos=data});
      }
  } else {
      //Sino es porque la bandera trae otro valor y solo es posible cuando preciona el boton de recuperar   

      this.cargo.controls["bandera"].setValue("0");
      if (this.cargo.valid == true) {
          this.catalogoService.updateCargo(this.cargo.value).subscribe(data => { });
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Dato Modificado con éxito',
              showConfirmButton: false,
              timer: 3000
          })
          this.catalogoService.getCargo().subscribe(data => { this.cargos = data });        
      }
  }
  this.cargo.controls["idcargo"].setValue("0");
  this.cargo.controls["bandera"].setValue("0");
  this.cargo.controls["cargo"].setValue("");
  this.cargo.controls["descripcion"].setValue("");
  this.display = 'none';
  this.catalogoService.getCargo().subscribe(data => { this.cargos = data });
}

modif(id) {
  this.titulo = "Modificar Cargo";
  this.display = 'block';
  this.catalogoService.recuperarCargo(id).subscribe(data => {
    this.cargo.controls["idcargo"].setValue(data.idcargo);
    this.cargo.controls["bandera"].setValue("1");
    this.cargo.controls["cargo"].setValue(data.cargo);
    this.cargo.controls["descripcion"].setValue(data.descripcion);
    this.catalogoService.getCargo().subscribe(data => { this.cargos = data });  
  });
}

eliminar(idcargo) { 
  Swal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "No podras revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
      if (result.value) {
          this.catalogoService.eliminarCargo(idcargo).subscribe(data => {
              Swal.fire(
                  'Dato eliminado!',
                  'Tu archivo ha sido eliminado con éxito.',
                  'success'
              )
            this.catalogoService.getCargo().subscribe(data => { this.cargos = data });
          });
         
      }
  })
}

buscar(buscador) {
  this.p = 1;
  this.catalogoService.buscarCargo(buscador.value).subscribe(res => this.cargos = res);
}

}
