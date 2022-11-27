import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresaFormComponent } from "./empresa-form/empresa-form.component";
import { ResumeComponent } from "./resume/resume.component";
import {ListarOfertasComponent} from "./ofertas-publicadas/listar-ofertas/listar-ofertas.component";
import {FormOfertasComponent} from "./ofertas-publicadas/form-ofertas/form-ofertas.component"
import { ListContactosComponent } from "./contactosEmpresariales/list-contactos/list-contactos.component";
import { FormscontactoComponent } from "./contactosEmpresariales/formscontacto/formscontacto.component";



const routes: Routes = [
  { path: '', component: ResumeComponent },
  {path:'ofertasPublicadas/empresa/:id',component:ListarOfertasComponent},
  {path:'form-ofertas',component:FormOfertasComponent},
  {path:'form-ofertas/:id',component:FormOfertasComponent},
  { path: 'empresa-form', component: EmpresaFormComponent },
  { path: 'empresa-form/:id', component: EmpresaFormComponent },
  {path:'contactosEmpresariales/empresa/:id',component:ListContactosComponent },
   {path:'cotacto-form',component:FormscontactoComponent},
   {path:'cotacto-form/:id',component:FormscontactoComponent}
  /* {path:'contactosEmpresariales/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'ofertasPublicadas/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'ofertasAplicadas/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }