import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-donantes',
  templateUrl: './form-donantes.component.html',
  styleUrls: ['./form-donantes.component.css']
})
export class FormDonantesComponent implements OnInit {

  //Variables 
  donantes: FormGroup;
  @Input() dontes: any;
  display = 'none';

  constructor(private catalogoService: CatalogosService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.donantes = new FormGroup({

      'IidDonante': new FormControl("0"),
      'nombre': new FormControl(""),
      'bandera': new FormControl("0"),
      'telefono': new FormControl(""),
      'direccion': new FormControl("")

    });
  }

  ngOnInit() {

    this.catalogoService.getDonantes().subscribe(data => { this.dontes = data });
  }

  //Métodos

  open() {
    //Limpiar
    this.donantes.controls["IidDonante"].setValue("0");
    this.donantes.controls["bandera"].setValue("0");
    this.donantes.controls["nombre"].setValue("");
    this.donantes.controls["telefono"].setValue("");
    this.donantes.controls["direccion"].setValue("");
      this.display = 'block';
  }

  close() {
    this.display = 'none';
  }

  guardarDatos() {
    //Si la vandera es cero que es el que trae por defecto en el metodo open() entra en la primera a insertar

    if ((this.donantes.controls["bandera"].value) == "0") {
      if (this.donantes.valid == true) {
        this.catalogoService.agregarDonante(this.donantes.value).subscribe(data => { });
        this.catalogoService.getDonantes().subscribe(res => this.dontes = res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Dato guardado con éxito',
          showConfirmButton: false,
          timer: 3000
        })
      }
    } else {

      //Sino es porque la bandera trae otro valor y solo es posible cuando preciona el boton de recuperar

      this.donantes.controls["bandera"].setValue("0");
      if (this.donantes.valid == true) {
        this.catalogoService.updateDonante(this.donantes.value).subscribe(data => { });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Dato modificado con éxito',
          showConfirmButton: false,
          timer: 3000
        })
      }
    }
    this.donantes.controls["IidDonante"].setValue("0");
    this.donantes.controls["bandera"].setValue("0");
    this.donantes.controls["nombre"].setValue("");
    this.donantes.controls["telefono"].setValue("");
    this.donantes.controls["direccion"].setValue("");
    this.display = 'none';
    this.catalogoService.getDonantes().subscribe(res => this.donantes = res);
  }


  modif(id) {

    this.display = 'block';
    this.catalogoService.RecuperarDonante(id).subscribe(data => {
      this.donantes.controls['IidDonante'].setValue(data.IidDonante);
      this.donantes.controls['bandera'].setValue("1");
      this.donantes.controls['nombre'].setValue(data.nombre);
      this.donantes.controls['telefono'].setValue(data.telefono);
      this.donantes.controls['direccion'].setValue(data.telefono);

    });

  }

}
