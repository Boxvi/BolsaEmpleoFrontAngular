import { NgModule } from '@angular/core';
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
import { DetalleperfempresasestudianteComponent } from './estudiante/detalleperfempresasestudiante/detalleperfempresasestudiante.component';
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






];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SlideestudianteComponent]

