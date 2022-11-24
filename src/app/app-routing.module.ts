import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PerfilocupacionalComponent } from './estudiante/perfilocupacional/perfilocupacional.component';
import { ExperienciaComponent } from './estudiante/experiencia/experiencia.component';
import { ReferenciaslaboralesComponent } from './estudiante/referenciaslaborales/referenciaslaborales.component';
import { DetalleperfempresasestudianteComponent } from './estudiante/detalleperfempresasestudiante/detalleperfempresasestudiante.component';
import { EditarperfilocupacionalComponent } from './estudiante/editarperfilocupacional/editarperfilocupacional.component';
import { EditarexperienciaComponent } from './estudiante/editarexperiencia/editarexperiencia.component';
import { EdireferenciaslaboralesComponent } from './estudiante/edireferenciaslaborales/edireferenciaslaborales.component';
import { editarexperiencia } from './estudiante/editarexperiencia/editarexperiencia';
import { FormComponent } from './estudiante/experiencia/form.component';
const routes: Routes = [
  {path:'slideestudiate',component: SlideestudianteComponent},
  {path:'incioestudiante',component: InicioestudianteComponent},
  {path:'registroestudiante',component: RegistroestudianteComponent},
  {path:'perfilestudiante',component: PerfilestudianteComponent},
  {path:'intruformalestudiante',component: InstruccionformalestudianteComponent},
  {path:'infolaboralestudiante',component:InformacionlaboralestudianteComponent},
  {path:'infolaboralestudiante/:id',component:InformacionlaboralestudianteComponent},
  {path:'capacitacionesestudiante',component:CapacitacionesestudianteComponent},
  {path:'refpersonalesesestudiante',component:RefpersonalesestudianteComponent},
  {path:'ofertaslaboralesesestudiante',component:OfertaslaboralesestudianteComponent},
  {path:'detalleofelaboralesesestudiante',component:DetalleloflaboralesestudianteComponent},
  {path:'ofertasaplicadasestudiante',component:OfertasaplicadasestudianteComponent},
  {path:'detalleofeaplicadasestudiante',component:DetallelofaplicadasestudianteComponent},
  {path:'perfilempresasestudiante',component:PerfilempresasestudianteComponent},
  {path:'detalleperempresasestudiante',component:DetalleperfempresasestudianteComponent},
  {path:'perfilocupacionalestudiante',component:PerfilocupacionalComponent},
  {path:'perfilocupacionalestudiante/:id',component:PerfilocupacionalComponent},
  {path:'experienciaestudiante',component:ExperienciaComponent},
  {path:'experienciaestudiante/:id',component:ExperienciaComponent},
  {path:'referenciaslaboralesestudiante',component:ReferenciaslaboralesComponent},
  {path:'referenciaslaboralesestudiante/:id',component:ReferenciaslaboralesComponent},
  {path:'editarperfilocupacionalestudiante',component:EditarperfilocupacionalComponent},
  {path:'editarperfilocupacionalestudiante/:id',component:EditarperfilocupacionalComponent},
  {path:'editarexperienciaestudiante',component:EditarexperienciaComponent},
  {path:'editarexperienciaestudiante/:id',component:EditarexperienciaComponent},
  {path:'edireferenciaslaboralesestudiante',component:EdireferenciaslaboralesComponent},
  {path:'edireferenciaslaboralesestudiante/:id',component:EdireferenciaslaboralesComponent},
  {path:'formcomponentexperiencia',component:FormComponent}







];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SlideestudianteComponent]

