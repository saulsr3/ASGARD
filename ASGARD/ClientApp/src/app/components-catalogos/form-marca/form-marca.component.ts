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
    dato() {
        Swal.fire('Any fool can use a computer')
}
    guardarDatos() {
       
        if (this.marca.valid == true) {
            this.catalogoService.setMarca(this.marca.value).subscribe(data => { });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Dato Guardado con exito',
                showConfirmButton: false,
                timer: 1500
            })
            this.catalogoService.getMarcas().subscribe(res => this.marcas = res);
             
           
            //this.router.navigate(["/form-marca"])
        }

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

    }

