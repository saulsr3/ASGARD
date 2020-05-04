import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'form-clasificacion',
  templateUrl: './form-clasificacion.component.html',
  styleUrls: ['./form-clasificacion.component.css']
})
export class FormClasificacionComponent implements OnInit {
  @Input() clasificaciones: any;
  //p: number = 1;
  clasificacion: FormGroup;
  display = 'none';
  constructor(private catalogosServices: CatalogosService,  private router: Router, private activateRoute: ActivatedRoute) {
    this.clasificacion = new FormGroup({
      'idclasificacion': new FormControl("0"),
      'bandera': new FormControl("0"),
      'clasificacion': new FormControl("", [Validators.required]),
      'correlativo': new FormControl("", [Validators.required]),
      'descripcion': new FormControl("")

    });



  }

  ngOnInit() {
    this.catalogosServices.getClasificacion().subscribe(data =>  this.clasificaciones = data )

  }

  open() {
    //limpia cache
    this.clasificacion.controls["idclasificacion"].setValue("0");
    this.clasificacion.controls["bandera"].setValue("0");
    this.clasificacion.controls["clasificacion"].setValue("");
    this.clasificacion.controls["correlativo"].setValue("");
    this.clasificacion.controls["descripcion"].setValue(""); 
    this.display = 'block';
  }
  close() {
    this.display = 'none';
  }
  guardarDatos() {
    if ((this.clasificacion.controls["bandera"].value) == "0") {
      if (this.clasificacion.valid == true) {
        this.catalogosServices.guardarClasificacion(this.clasificacion.value).subscribe(data => { });
        this.catalogosServices.getClasificacion().subscribe(res => this.clasificaciones = res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Dato Guardado con exito',
          showConfirmButton: false,
          timer: 3000
        })
      }
    } else {
      //Sino es porque la bandera trae otro valor y solo es posible cuando preciona el boton de recuperar
      this.clasificacion.controls["bandera"].setValue("0");
      if (this.clasificacion.valid == true) {
        this.catalogosServices.modificarclasificacion(this.clasificacion.value).subscribe(data => { });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Dato modificado con exito',
          showConfirmButton: false,
          timer: 3000
        })
      }
    }
    this.clasificacion.controls["idclasificacion"].setValue("0");
    this.clasificacion.controls["bandera"].setValue("0");
    this.clasificacion.controls["clasificacion"].setValue("");
    this.clasificacion.controls["correlativo"].setValue("");
    this.clasificacion.controls["descripcion"].setValue("");
    //this.router.navigate(["/form-marca"])

    this.display = 'none';
    this.catalogosServices.getClasificacion().subscribe(res => this.clasificaciones = res);

  }

  modif(id) {
    this.display = 'block';
    this.catalogosServices.RecuperarClasificacion(id).subscribe(data => {
      this.clasificacion.controls["idclasificacion"].setValue(data.idclasificacion);
      this.clasificacion.controls["clasificacion"].setValue(data.clasificacion);
      this.clasificacion.controls["correlativo"].setValue(data.correlativo);
      this.clasificacion.controls["descripcion"].setValue(data.descripcion);
      this.clasificacion.controls["bandera"].setValue("1");

    });
  }
 
  eliminar(idclasificacion) {
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
        this.catalogosServices.eliminarCasificacion(idclasificacion).subscribe(data => {
          Swal.fire(
            'Registro eliminado!',
            'Tu archivo ha sido eliminado con exito.',
            'success'
          )
          this.catalogosServices.getClasificacion().subscribe(
            data => { this.clasificaciones = data }
          );
        });

      }
    })
  }

  
  

 

  buscar(buscador) {
    this.catalogosServices.buscarClasificacion(buscador.value).subscribe(res => this.clasificaciones = res);
  }
}
