import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';



//Registrar o declarar el componente creado
import { HttpModule } from '@angular/http';
import { SharedComponent } from './components/shared/shared.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { TablaActivosComponent } from './components-control/tabla-activos/tabla-activos.component';
import { FormTipoActivoComponent } from './components-catalogos/form-tipo-activo/form-tipo-activo.component';
import { FormEmpleadoComponent } from './components-catalogos/form-empleado/form-empleado.component';
import { FormMarcaComponent } from './components-catalogos/form-marca/form-marca.component';
import { FormSucursalComponent } from './components-catalogos/form-sucursal/form-sucursal.component';
//servicios hay que procurar llevar el orden
import { CargarScriptsService } from './services/cargar-scripts.service';
import { CatalogosService } from './services/catalogos.service';
import { TablaMarcasComponent } from './components-catalogos/tabla-marcas/tabla-marcas.component';
import { FormDonantesComponent } from './components-catalogos/form-donantes/form-donantes.component';

//Import para trabajar con formularios
import { ReactiveFormsModule } from "@angular/forms";
import { FormClasificacionComponent } from './components-catalogos/form-clasificacion/form-clasificacion.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SharedComponent,
    FooterComponent,
    HeaderComponent,
    TablaActivosComponent,
    FormTipoActivoComponent,
    FormEmpleadoComponent,
    FormMarcaComponent,
    FormSucursalComponent,
    TablaMarcasComponent,
    FormDonantesComponent,
    FormClasificacionComponent
   
    //Aqui vamos a agregar los compoenentes del proyecto
  ],
    imports: [
    HttpModule,
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'shared', component: SharedComponent },
        { path: 'tabla-activos', component: TablaActivosComponent },
        { path: 'form-tipo', component: FormTipoActivoComponent },
        { path: 'form-empleado', component: FormEmpleadoComponent },
        { path: 'form-marca', component: FormMarcaComponent },
        { path: 'tabla-marca', component: TablaMarcasComponent },
        { path: 'form-sucursal', component: FormSucursalComponent },
      { path: 'form-donantes', component: FormDonantesComponent }

    ])
    ],
    providers: [CargarScriptsService, CatalogosService],
    bootstrap: [AppComponent, NavMenuComponent, HeaderComponent]
})
export class AppModule { }
