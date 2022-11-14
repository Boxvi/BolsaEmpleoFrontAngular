import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideempresaComponent } from './empresa/slideempresa/slideempresa.component';
import { RegistroempresaComponent } from './empresa/registroempresa/registroempresa.component';
import { DatosempresaComponent } from './empresa/datosempresa/datosempresa.component';
import { DatoscontactoComponent } from './empresa/datoscontacto/datoscontacto.component';
import { ConsultarcurriculumsComponent } from './empresa/consultarcurriculums/consultarcurriculums.component';
import { ConcultarcurriculumstablaComponent } from './empresa/concultarcurriculumstabla/concultarcurriculumstabla.component';
import { PublicarofertasComponent } from './empresa/publicarofertas/publicarofertas.component';
import { ModificarofertasComponent } from './empresa/modificarofertas/modificarofertas.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideempresaComponent,
    RegistroempresaComponent,
    DatosempresaComponent,
    DatoscontactoComponent,
    ConsultarcurriculumsComponent,
    ConcultarcurriculumstablaComponent,
    PublicarofertasComponent,
    ModificarofertasComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
