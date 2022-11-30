import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListHojasVidaComponent } from './hojasvida/list-hojas-vida/list-hojas-vida.component';
import { ListOfertasLaboralesComponent } from './ofertaslaborales/list-ofertas-laborales/list-ofertas-laborales.component';
import { ListPerfilEmpresarialComponent } from './perfilempresarial/list-perfil-empresarial/list-perfil-empresarial.component';
import { FormHojasVidaComponent } from './hojasvida/form-hojas-vida/form-hojas-vida.component';
import { FormOfertasLaboralesComponent } from './ofertaslaborales/form-ofertas-laborales/form-ofertas-laborales.component';
import { FormPerfilEmpresarialComponent } from './perfilempresarial/form-perfil-empresarial/form-perfil-empresarial.component';
import { ListHojasVidaPipe } from './hojasvida/pipe/list-hojas-vida.pipe';
import { PerfilEmpresarialPipe } from './perfilempresarial/pipe/perfil-empresarial.pipe';
import { ListPostulacionesComponent } from './postulaciones/list-postulaciones/list-postulaciones.component';
import { FormPostulacionesComponent } from './postulaciones/form-postulaciones/form-postulaciones.component';
import { OfertasLaboralesPipe } from './ofertaslaborales/pipe/ofertas-laborales.pipe';
import { ReportesComponent } from './reportes/reportes.component';
import { PostulacionesPipe } from './postulaciones/pipe/postulaciones.pipe';
import { ProvinciaComponent } from './provincia/provincia.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { InstEducativasComponent } from './inst-educativas/inst-educativas.component';
import { AreaEstudioComponent } from './area-estudio/area-estudio.component';



@NgModule({
  declarations: [
    ResumeComponent,
    ListHojasVidaComponent,
    ListOfertasLaboralesComponent,
    ListPerfilEmpresarialComponent,
    FormHojasVidaComponent,
    FormOfertasLaboralesComponent,
    FormPerfilEmpresarialComponent,
    ListHojasVidaPipe,
    PerfilEmpresarialPipe,
    ListPostulacionesComponent,
    FormPostulacionesComponent,
    OfertasLaboralesPipe,
    ReportesComponent,
    PostulacionesPipe,
    ProvinciaComponent,
    CiudadComponent,
    InstEducativasComponent,
    AreaEstudioComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule
  ]
})
export class AdministradorModule { }
