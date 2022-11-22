import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HojaDeVidaComponent } from './administrador/CurriculumVitae/HojaDeVida/HojaDeVida.component';
import { AdministradorComponent } from './administrador/admin/administrador.component';
import { MenuComponent } from './administrador/menuLateral/menuLateral.component';
import { cvComponent } from './administrador/CurriculumVitae/cv/cv.component';
import { PerfilEmpresaComponent } from './administrador/PerfilDeLaEmpresa/PerfilEmpresa/perfilEmpresa.component';
import { EmpresaComponent } from './administrador/PerfilDeLaEmpresa/Empresa/empresa.component';
import { OfertaLaboralComponent } from './administrador/RevisarOfertasLaborales/OfertaLaboral/oferta-laboral.component';


import { cvService } from './administrador/CurriculumVitae/cv/cv.service';
import { OfertaLaboralService } from './administrador/RevisarOfertasLaborales/OfertaLaboral/oferta-laboral.service';
import { RevofertalaboralService } from './administrador/RevisarOfertasLaborales/RevisarOfertaLaboral/revofertalaboral.service';

import { RevofertaLaboralComponent } from './administrador/RevisarOfertasLaborales/RevisarOfertaLaboral/revoferta-laboral.component';
import { ReporteComponent } from './administrador/ReportesEstadisticos/Reporte/reporte.component';
import { GraficosComponent } from './administrador/ReportesEstadisticos/Graficos/graficos.component';
import {HttpClientModule} from '@angular/common/http';
import {HojaDeVidaService} from "./serviceEstudiantes/hoja-de-vida.service";
import {EmpresasService} from "./serviceEmpresa/empresas.service";

const routes: Routes = [
  {path: '',redirectTo: '', pathMatch: 'full'},
  {path: 'hojaDevida', component: HojaDeVidaComponent},
  {path: 'cv', component: cvComponent},
  {path: 'perfilEmpresa', component: PerfilEmpresaComponent},
  {path: 'perfilEmpresa/:ruc', component: PerfilEmpresaComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'empresa/:ruc', component: EmpresaComponent},
  {path: 'ofertaLaboral', component: OfertaLaboralComponent},
  {path: 'revOfertaLaboral', component: RevofertaLaboralComponent},
  {path: 'reporte', component: ReporteComponent},
  {path: 'graficos', component: GraficosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HojaDeVidaComponent,
    AdministradorComponent,
    cvComponent,
    PerfilEmpresaComponent,
    EmpresaComponent,
    OfertaLaboralComponent,
    RevofertaLaboralComponent,
    ReporteComponent,
    GraficosComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [EmpresasService, HojaDeVidaService, cvService, OfertaLaboralService, RevofertalaboralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
