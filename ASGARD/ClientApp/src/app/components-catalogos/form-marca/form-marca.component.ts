import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CatalogosService } from './../../services/catalogos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-marca',
  templateUrl: './form-marca.component.html',
  styleUrls: ['./form-marca.component.css']
})
export class FormMarcaComponent implements OnInit {
    @Input() marcas: any;
   marca: FormGroup;
    display = 'none';
    constructor(private catalogoService: CatalogosService, private router: Router, private activateRoute: ActivatedRoute) {
        this.marca = new FormGroup({
            'idMarca': new FormControl("0"),
            'marca': new FormControl("", [Validators.required]),
            'descripcion': new FormControl("", [Validators.required])
        });
     
    }

    ngOnInit() {
        this.catalogoService.getMarcas().subscribe(res => this.marcas = res);
       
    }
    open() {
        //limpia cache
        this.marca.controls["idMarca"].setValue("0");
        this.marca.controls["marca"].setValue("");
        this.marca.controls["descripcion"].setValue("");
        this.display = 'block';
    }
    close() {
        this.display = 'none';
    }
//metodo para guardar los datos
  //quitar bifurcacion
    guardarDatos() {
       
        if (this.marca.valid == true) {
            this.catalogoService.setMarca(this.marca.value).subscribe(data => { });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Dato Guardado con exito',
                showConfirmButton: false,
                timer: 3000
            })
            this.marca.controls["idMarca"].setValue("0");
            this.marca.controls["marca"].setValue("");
            this.marca.controls["descripcion"].setValue("");
            //this.router.navigate(["/form-marca"])
            this.display = 'none';
            this.catalogoService.getMarcas().subscribe(res => this.marcas = res);
        }

    }
    modif(id) {

        this.display = 'block';
        this.catalogoService.recuperarMarcas(id).subscribe(data => {
         
            this.marca.controls["idMarca"].setValue(data.idMarca);
            this.marca.controls["marca"].setValue(data.marca);
            this.marca.controls["descripcion"].setValue(data.descripcion);

            //this.marca.controls["idMarca"].setValue(data.idMarca);
            //this.marca.controls["marc"].setValue("123");
            //this.marca.controls["descripcion"].setValue(data.descripcion);

        });
    }
    eliminar(idMarca) {
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
                this.catalogoService.eliminarMarca(idMarca).subscribe(data => {
                    Swal.fire(
                        'Dato eliminado!',
                        'Tu archivo ha sido eliminado con exito.',
                        'success'
                    )
                    this.catalogoService.getMarcas().subscribe(
                        data => { this.marcas = data }
                    );
                });
               
            }
        })
    }
    buscar(buscador) {
        this.catalogoService.buscarMarca(buscador.value).subscribe(res => this.marcas = res);
    }
    }

