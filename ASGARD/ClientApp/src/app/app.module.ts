import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { NgxMaskModule } from 'ngx-mask'; 


//Registrar o declarar el componente creado
import { HttpModule } from '@angular/http';
import { SharedComponent } from './components/shared/shared.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { TablaActivosComponent } from './components-control/tabla-activos/tabla-activos.component';
import { FormEmpleadoComponent } from './components-catalogos/form-empleado/form-empleado.component';
import { FormMarcaComponent } from './components-catalogos/form-marca/form-marca.component';
import { FormSucursalComponent } from './components-catalogos/form-sucursal/form-sucursal.component';
//servicios hay que procurar llevar el orden

import { CargarScriptsService } from './services/cargar-scripts.service';
import { CatalogosService } from './services/catalogos.service';
import { UsuarioService } from './services/usuario.service';

import { TablaMarcasComponent } from './components-catalogos/tabla-marcas/tabla-marcas.component';
import { FormDonantesComponent } from './components-catalogos/form-donantes/form-donantes.component';
import { FormProveedorComponent } from './components-catalogos/form-proveedor/form-proveedor.component';
import { FormCargoComponent } from './components-catalogos/form-cargo/form-cargo.component';

//Import para trabajar con formularios 
import { ReactiveFormsModule } from "@angular/forms";
import { FormClasificacionComponent } from './components-catalogos/form-clasificacion/form-clasificacion.component';
import { FormAreasNegocioComponent } from './components-catalogos/form-areas-negocio/form-areas-negocio.component';
import { FormUsuarioComponent } from './components-usuarios/form-usuario/form-usuario.component';
import { FormTipoUsuarioComponent } from './components-usuarios/form-tipo-usuario/form-tipo-usuario.component';






@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SharedComponent,
    FooterComponent,
    HeaderComponent,
    TablaActivosComponent,
    FormEmpleadoComponent,
    FormMarcaComponent,
    FormSucursalComponent,
    TablaMarcasComponent,
    FormDonantesComponent,
    FormClasificacionComponent,
    FormProveedorComponent,
    FormCargoComponent,
    FormAreasNegocioComponent,
    FormUsuarioComponent,
    FormTipoUsuarioComponent
   
    //Aqui vamos a agregar los compoenentes del proyecto

  ],
    imports: [
    HttpModule,
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
    FormsModule,
        ReactiveFormsModule,
      NgxPaginationModule,
      NgxMaskModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'shared', component: SharedComponent },
        { path: 'tabla-activos', component: TablaActivosComponent },
        { path: 'form-empleado', component: FormEmpleadoComponent },
        { path: 'form-marca', component: FormMarcaComponent },
        { path: 'tabla-marca', component: TablaMarcasComponent },
        { path: 'form-sucursal', component: FormSucursalComponent },
      { path: 'form-donantes', component: FormDonantesComponent },
      { path: 'form-proveedor', component: FormProveedorComponent },
      { path: 'form-clasificacion', component: FormClasificacionComponent },
      { path: 'form-cargo', component: FormCargoComponent },
      { path: 'form-area-negocio', component: FormAreasNegocioComponent },
      { path: 'form-usuario', component: FormUsuarioComponent },
      { path: 'form-tipo-usuario', component: FormTipoUsuarioComponent }

    ])
  ],
  providers: [CargarScriptsService, CatalogosService, UsuarioService],

    bootstrap: [AppComponent, NavMenuComponent, HeaderComponent]
})
export class AppModule { }
