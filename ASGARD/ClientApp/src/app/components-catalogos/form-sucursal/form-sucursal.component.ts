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
    @Input() sucursales: any;
    p: number = 1;
    sucursal: FormGroup;
    display = 'none';
    titulo: string;
    constructor(private catalogoService: CatalogosService, private router: Router, private activateRoute: ActivatedRoute) {
        this.sucursal = new FormGroup({
            'idSucursal': new FormControl("0"),
            'bandera': new FormControl("0"),
            'nombre': new FormControl("", [Validators.required]),
            'ubicacion': new FormControl("", [Validators.required]),
            'correlativo': new FormControl("", [Validators.required])
        });
    }

    ngOnInit() {
        this.catalogoService.getSucursales().subscribe(res => this.sucursales = res);
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
                this.catalogoService.setSucursal(this.sucursal.value).subscribe(data => { });
                this.catalogoService.getSucursales().subscribe(res => this.sucursales = res);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Dato Guardado con exito',
                    showConfirmButton: false,
                    timer: 3000
                })
            }

            this.catalogoService.getSucursales().subscribe(res => this.sucursales = res);

        }
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
                    this.catalogoService.getSucursales().subscribe(
                        data => { this.sucursales = data }
                    );
                });

            }
        })
    }
 

}
