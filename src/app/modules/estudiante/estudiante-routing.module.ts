import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormLogroComponent } from "./logros/form-logro/form-logro.component";
import { ListLogrosComponent } from "./logros/list-logros/list-logros.component";
import { PersonalFormComponent } from "./personal-form/personal-form.component";
import { ResumeComponent } from "./resume/resume.component";
import { PerfilocupacionalComponent } from "./perfilocupacional/perfilocupacional.component";
import { LogrosFormComponent } from "./logros-form/logros-form.component";

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'personal-form', component: PersonalFormComponent },
  { path: 'personal-form/:id', component: PersonalFormComponent },
  { path: 'logros/estudiante/:id', component: ListLogrosComponent },
  { path: 'logros-form', component: FormLogroComponent },
  { path: 'logros-form/:id', component: FormLogroComponent },


  /* {path:'preferenciasLaborales/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
   {path:'perfilOcupacional/estudiante/:id',component: PerfilocupacionalComponent },
   {path:'logros-form',component: LogrosFormComponent }
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
