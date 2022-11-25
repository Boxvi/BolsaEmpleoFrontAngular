import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListHojasVidaComponent } from './hojasvida/list-hojas-vida/list-hojas-vida.component';
import { ListOfertasLaboralesComponent } from './ofertaslaborales/list-ofertas-laborales/list-ofertas-laborales.component';
import { ListPerfilEmpresarialComponent } from './perfilempresarial/list-perfil-empresarial/list-perfil-empresarial.component';
import { ListReportesEstadisticosComponent } from './reportesestadisticos/list-reportes-estadisticos/list-reportes-estadisticos.component';
import { FormHojasVidaComponent } from './hojasvida/form-hojas-vida/form-hojas-vida.component';
import { FormOfertasLaboralesComponent } from './ofertaslaborales/form-ofertas-laborales/form-ofertas-laborales.component';
import { FormPerfilEmpresarialComponent } from './perfilempresarial/form-perfil-empresarial/form-perfil-empresarial.component';



@NgModule({
  declarations: [
    ResumeComponent,
    ListHojasVidaComponent,
    ListOfertasLaboralesComponent,
    ListPerfilEmpresarialComponent,
    ListReportesEstadisticosComponent,
    FormHojasVidaComponent,
    FormOfertasLaboralesComponent,
    FormPerfilEmpresarialComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule
  ]
})
export class AdministradorModule { }
