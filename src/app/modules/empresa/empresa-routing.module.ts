import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresaFormComponent } from "./empresa-form/empresa-form.component";
import { OfAplicadasComponent } from "./of-aplicadas/of-aplicadas.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'empresa-form', component: EmpresaFormComponent },
  { path: 'empresa-form/:id', component: EmpresaFormComponent },
  { path: 'of-aplicadas', component: OfAplicadasComponent},
  /* {path:'contactosEmpresariales/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'ofertasPublicadas/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */
   {path:'ofertasAplicadas/empresa/:id',component: OfAplicadasComponent } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }