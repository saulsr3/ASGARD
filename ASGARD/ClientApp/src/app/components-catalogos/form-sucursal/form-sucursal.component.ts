import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-form-sucursal',
    templateUrl: './form-sucursal.component.html',
    styleUrls: ['./form-sucursal.component.css']
})
export class FormSucursalComponent implements OnInit {
    sucursales: any;
    p: number = 1;
    sucursal: FormGroup;
    display = 'none';
    titulo: string;
    constructor(private catalogoService: CatalogosService, private router: Router, private activateRoute: ActivatedRoute) {
        this.sucursal = new FormGroup({
            'idSucursal': new FormControl("0"),
            'bandera': new FormControl("0"),
            'nombre': new FormControl("", [Validators.required,Validators.maxLength(50)]),
            'ubicacion': new FormControl("", [Validators.required,Validators.maxLength(50)]),
            'correlativo': new FormControl("", [Validators.required, Validators.maxLength(10)], this.noRepetirCorrelativo.bind(this))
        });
    }

    ngOnInit() {
        this.catalogoService.getSucursales().subscribe(res => {this.sucursales = res});
    }
    open() {
        //limpia cache
        this.titulo = "Formulario Sucursal";
        this.sucursal.controls["idSucursal"].setValue("0");
        this.sucursal.controls["bandera"].setValue("0");
        this.sucursal.controls["nombre"].setValue("");
        this.sucursal.controls["ubicacion"].setValue("");
        this.sucursal.controls["correlativo"].setValue("");
        this.display = 'block';
    }
    close() {
        this.display = 'none';
    }
    guardarDatos() {
        //Si la vandera es cero que es el que trae por defecto en el metodo open() entra en la primera a insertar
        if ((this.sucursal.controls["bandera"].value) == "0") {
           
            if (this.sucursal.valid == true) {
                this.catalogoService.setSucursal(this.sucursal.value).subscribe(data => { 
                this.catalogoService.getSucursales().subscribe(res => {this.sucursales = res});
                this.display = 'none';
                });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Dato Guardado con exito',
                    showConfirmButton: false,
                    timer: 3000
                })
            }
            this.catalogoService.getSucursales().subscribe(res => {this.sucursales = res});

        }else{

            this.sucursal.controls["bandera"].setValue("0");
            if (this.sucursal.valid == true) {
                this.catalogoService.updateSucursal(this.sucursal.value).subscribe(data => {
                    this.catalogoService.getSucursales().subscribe(res => {this.sucursales = res});
                 });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Dato Modificado con exito',
                    showConfirmButton: false,
                    timer: 3000
                })        
            }
        }
        this.sucursal.controls["idSucursal"].setValue("0");
        this.sucursal.controls["bandera"].setValue("0");
        this.sucursal.controls["nombre"].setValue("");
        this.sucursal.controls["ubicacion"].setValue("");
        this.sucursal.controls["correlativo"].setValue("");
        this.display = 'none';
      
    }
    eliminar(idSucursal) {
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
                this.catalogoService.deleteSucursal(idSucursal).subscribe(data => {
                    Swal.fire(
                        'Dato eliminado!',
                        'Tu archivo ha sido eliminado con exito.',
                        'success'
                    )
                    this.catalogoService.getSucursales().subscribe(res => {this.sucursales = res});
                });

            }
        })
    }
    modificar(id){
        this.titulo = "Modificar Sucursal";
        this.display = 'block';
        this.catalogoService.recuperarSucursal(id).subscribe(data => {
            this.sucursal.controls["idSucursal"].setValue(data.idSucursal);
            this.sucursal.controls["nombre"].setValue(data.nombre);
            this.sucursal.controls["ubicacion"].setValue(data.ubicacion);
            this.sucursal.controls["correlativo"].setValue(data.correlativo);
            this.sucursal.controls["bandera"].setValue("1");
        });

    }
    buscar(buscador) {
        this.p=1;
        this.catalogoService.buscarSucursal(buscador.value).subscribe(res => this.sucursales = res);
    }
    noRepetirCorrelativo(control: FormControl) {

        var promesa = new Promise((resolve, reject) => {
    
          if (control.value != "" && control.value != null) {
    
            this.catalogoService.validarCorrelativoSucursal(this.sucursal.controls["idSucursal"].value, control.value)
              .subscribe(data => {
                if (data == 1) {
                  resolve({ yaExisteCorrelativo: true });
                } else {
                  resolve(null);
                }
    
              })
    
          }
    
    
        });
    
        return promesa;
      }

}
