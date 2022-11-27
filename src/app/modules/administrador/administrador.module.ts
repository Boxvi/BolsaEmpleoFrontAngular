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
    FormPostulacionesComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule
  ]
})
export class AdministradorModule { }
