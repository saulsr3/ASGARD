import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.css']
})
export class FormProveedorComponent implements OnInit {

  proveedores: FormGroup;
  @Input() proveedor: any;
  display = 'none';
  titulo: string;
  //parametro: string;
  p: number = 1;
  constructor(private catalogoService: CatalogosService, private router: Router,
    private activateRoute: ActivatedRoute) {

    this.proveedores = new FormGroup({

      'idProveedor': new FormControl("0"),
      'bandera': new FormControl("0"),
      'nombre': new FormControl("", [Validators.required]),
      'direccion': new FormControl("", [Validators.required]),
      'telefono': new FormControl("", [Validators.required, Validators.maxLength(9), Validators.pattern("[1-9]{1}[0-9]{3}-[0-9]{4}")]),
      'rubro': new FormControl("", [Validators.required]),
      'encargado': new FormControl("", [Validators.required]),
      'telefonoencargado': new FormControl("", [Validators.required])
    });

    //this.activateRoute.params.subscribe(parametro => {
    //  this.parametro = parametro["id"];
    //  if (this.parametro == "nuevo") {
    //    this.titulo = "Agregando un Proveedor";
    //  } 
    //});

    //this.activateRoute.params.subscribe(parametro => {
    //  this.parametro = parametro["id"];
    //  if (this.parametro == "editar") {
    //    this.titulo = "Editando un Proveedor";
    //  }
    //});

  }

  ngOnInit() {
    this.catalogoService.getProveedores().subscribe(res => this.proveedor = res);
  }

  open() {
    //limpia cache
    this.titulo = "Agregar Proveedor";
    this.proveedores.controls["idProveedor"].setValue("0");
    this.proveedores.controls["bandera"].setValue("0");
    this.proveedores.controls["nombre"].setValue("");
    this.proveedores.controls["direccion"].setValue("");
    this.proveedores.controls["telefono"].setValue("");
    this.proveedores.controls["rubro"].setValue("");
    this.proveedores.controls["encargado"].setValue("");
    this.proveedores.controls["telefonoencargado"].setValue("");  
    this.display = 'block';
  }

  close() {
    this.display = 'none';
  }

  //dato() {
  //  Swal.fire('Any fool can use a computer')
  //}

  guardarDatos() {
    if ((this.proveedores.controls["bandera"].value) == "0") {
    if (this.proveedores.valid == true) {
      this.catalogoService.agregarProveedor(this.proveedores.value).subscribe(data => { });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Dato Guardado con exito',
        showConfirmButton: false,
        timer: 3000
        })
      }

    }
    else
    {
      //Sino es porque la bandera trae otro valor y solo es posible cuando preciona el boton de recuperar

      this.proveedores.controls["bandera"].setValue("0");
      if (this.proveedores.valid == true) {
        this.catalogoService.ActualizarProveedor(this.proveedores.value).subscribe(data => { });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Dato Modificado con exito',
          showConfirmButton: false,
          timer: 3000
        })
      }
    }
      this.proveedores.controls["idProveedor"].setValue("0");
      this.proveedores.controls["bandera"].setValue("0");
      this.proveedores.controls["nombre"].setValue("");
      this.proveedores.controls["direccion"].setValue("");
      this.proveedores.controls["telefono"].setValue("");
      this.proveedores.controls["rubro"].setValue("");
      this.proveedores.controls["encargado"].setValue("");
      this.proveedores.controls["telefonoencargado"].setValue("");

      this.display = 'none';
      this.catalogoService.getProveedores().subscribe(res => this.proveedor = res);


      //this.router.navigate(["/form-proveedor"])
  }

  

  modificar(id) {

    this.titulo = "Modificar Proveedor";
    this.display = 'block';
    this.catalogoService.recuperarProveedores(id).subscribe(data => {

      this.proveedores.controls["idProveedor"].setValue(data.idProveedor);
      this.proveedores.controls["nombre"].setValue(data.nombre);
      this.proveedores.controls["direccion"].setValue(data.direccion);
      this.proveedores.controls["telefono"].setValue(data.telefono);
      this.proveedores.controls["rubro"].setValue(data.rubro);
      this.proveedores.controls["encargado"].setValue(data.encargado);
      this.proveedores.controls["telefonoencargado"].setValue(data.telefonoencargado);
      this.proveedores.controls["bandera"].setValue("1");


    });
  }


  eliminar(idProveedor) {
    Swal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "No podras revertir esta accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.catalogoService.eliminarProveedor(idProveedor).subscribe(data => {
          Swal.fire(
            'Dato eliminado!',
            'Tu archivo ha sido eliminado con exito.',
            'success'
          )
          this.catalogoService.getProveedores().subscribe(
            data => { this.proveedor = data }
          );
        });

      }
    })
  }

  //Método

  //buscar(buscador) {
  //  this.p = 1;
  //  this.catalogoService.buscarProveedor(buscador.value).subscribe(res => this.proveedor = res);
  //}

  noIniciaCeroTelefono(control: FormControl) {
    if (control.value != null && control.value != "") {
      if ((<string>control.value.toString()).startsWith("0")) {
        return { IniciaCero: true };
      }
    }
    return null;
  }



}

