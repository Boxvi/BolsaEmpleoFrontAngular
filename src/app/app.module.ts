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

import { HojaDeVidaService } from './administrador/CurriculumVitae/HojaDeVida/HojaDeVida.service';
import { cvService } from './administrador/CurriculumVitae/cv/cv.service';
import { OfertaLaboralService } from './administrador/RevisarOfertasLaborales/OfertaLaboral/oferta-laboral.service';
import { RevofertalaboralService } from './administrador/RevisarOfertasLaborales/RevisarOfertaLaboral/revofertalaboral.service';

import { RevofertaLaboralComponent } from './administrador/RevisarOfertasLaborales/RevisarOfertaLaboral/revoferta-laboral.component';

const routes: Routes = [
  {path: '',redirectTo: '', pathMatch: 'full'},
  {path: 'hojaDevida', component: HojaDeVidaComponent},
  {path: 'cv', component: cvComponent},
  {path: 'perfilEmpresa', component: PerfilEmpresaComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'ofertaLaboral', component: OfertaLaboralComponent},
  {path: 'revOfertaLaboral', component: RevofertaLaboralComponent}
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
    RevofertaLaboralComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HojaDeVidaService, cvService, OfertaLaboralService, RevofertalaboralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
