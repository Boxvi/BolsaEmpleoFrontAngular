import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlideestudianteComponent } from './estudiante/slideestudiante/slideestudiante.component';
import { InicioestudianteComponent } from './inicioestudiante/inicioestudiante.component';
import { RegistroestudianteComponent } from './estudiante/registroestudiante/registroestudiante.component';
import { PerfilestudianteComponent } from './estudiante/perfilestudiante/perfilestudiante.component';
import { InstruccionformalestudianteComponent } from './estudiante/instruccionformalestudiante/instruccionformalestudiante.component';
import { InformacionlaboralestudianteComponent } from './estudiante/informacionlaboralestudiante/informacionlaboralestudiante.component';
import { CapacitacionesestudianteComponent } from './estudiante/capacitacionesestudiante/capacitacionesestudiante.component';
import { RefpersonalesestudianteComponent } from './estudiante/refpersonalesestudiante/refpersonalesestudiante.component';
import { OfertaslaboralesestudianteComponent } from './estudiante/ofertaslaboralesestudiante/ofertaslaboralesestudiante.component';
import { DetalleloflaboralesestudianteComponent } from './estudiante/detalleloflaboralesestudiante/detalleloflaboralesestudiante.component';
import { OfertasaplicadasestudianteComponent } from './estudiante/ofertasaplicadasestudiante/ofertasaplicadasestudiante.component';
import { DetallelofaplicadasestudianteComponent } from './estudiante/detallelofaplicadasestudiante/detallelofaplicadasestudiante.component';
import { PerfilempresasestudianteComponent } from './estudiante/perfilempresasestudiante/perfilempresasestudiante.component';
import { DetalleperfempresasestudianteComponent } from './estudiante/detalleperfempresasestudiante/detalleperfempresasestudiante.component';

import  {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SlideestudianteComponent,
    InicioestudianteComponent,
    RegistroestudianteComponent,
    PerfilestudianteComponent,
    InstruccionformalestudianteComponent,
    InformacionlaboralestudianteComponent,
    CapacitacionesestudianteComponent,
    RefpersonalesestudianteComponent,
    OfertaslaboralesestudianteComponent,
    DetalleloflaboralesestudianteComponent,
    OfertasaplicadasestudianteComponent,
    DetallelofaplicadasestudianteComponent,
    PerfilempresasestudianteComponent,
    DetalleperfempresasestudianteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule

    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
