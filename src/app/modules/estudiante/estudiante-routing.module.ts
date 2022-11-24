import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListLogrosComponent } from "./logros/list-logros/list-logros.component";
import { PersonalFormComponent } from "./personal-form/personal-form.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'personal-form', component: PersonalFormComponent },
  { path: 'personal-form/:id', component: PersonalFormComponent },
  { path: 'logros/estudiante/:id', component: ListLogrosComponent },
  /* {path:'preferenciasLaborales/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'perfilOcupacional/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'instruccionFormal/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'capacitaciones/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'referenciasProfesionales/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'referenciasPersonales/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }