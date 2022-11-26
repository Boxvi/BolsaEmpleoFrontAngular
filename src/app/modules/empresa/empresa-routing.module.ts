import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: '', component: ResumeComponent }
  /* {path:'contactosEmpresariales/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'ofertasPublicadas/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'ofertasAplicadas/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }