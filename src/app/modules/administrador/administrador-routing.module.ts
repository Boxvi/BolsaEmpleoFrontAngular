import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ListHojasVidaComponent} from "./hojasvida/list-hojas-vida/list-hojas-vida.component";
import { ListOfertasLaboralesComponent} from "./ofertaslaborales/list-ofertas-laborales/list-ofertas-laborales.component";
import { ListPerfilEmpresarialComponent} from "./perfilempresarial/list-perfil-empresarial/list-perfil-empresarial.component";
import { ListReportesEstadisticosComponent} from "./reportesestadisticos/list-reportes-estadisticos/list-reportes-estadisticos.component";
import { FormHojasVidaComponent} from "./hojasvida/form-hojas-vida/form-hojas-vida.component";
import { FormOfertasLaboralesComponent } from "./ofertaslaborales/form-ofertas-laborales/form-ofertas-laborales.component";
import { FormPerfilEmpresarialComponent } from "./perfilempresarial/form-perfil-empresarial/form-perfil-empresarial.component";

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'hojas-vida', component: ListHojasVidaComponent},
  { path: 'hojas-vida/:id', component: FormHojasVidaComponent},
  { path: 'ofertas-laborales', component: ListOfertasLaboralesComponent},
  { path: 'ofertas-laborales/:id', component: FormOfertasLaboralesComponent},
  { path: 'perfil-empresarial', component: ListPerfilEmpresarialComponent},
  { path: 'perfil-empresarial/:id', component: FormPerfilEmpresarialComponent},
  { path: 'reportes-estadisticos', component: ListReportesEstadisticosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdministradorRoutingModule { }
