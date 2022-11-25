import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormLogroComponent } from "./logros/form-logro/form-logro.component";

import { CapacitacionesComponent } from "./capacitaciones/capacitaciones.component";

import { ListLogrosComponent } from "./logros/list-logros/list-logros.component";
import { PersonalFormComponent } from "./personal-form/personal-form.component";
import { ResumeComponent } from "./resume/resume.component";
import {CapacitacionesFormComponent} from "./capacitaciones-form/capacitaciones-form.component"

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'personal-form', component: PersonalFormComponent },
  { path: 'personal-form/:id', component: PersonalFormComponent },
  { path: 'logros/estudiante/:id', component: ListLogrosComponent },

  { path: 'logros-form', component: FormLogroComponent },
  { path: 'logros-form/:id', component: FormLogroComponent }


  {path:'capacitaciones/estudiante/:id',component: CapacitacionesComponent } ,
  {path: 'capacitaciones-form/estudiante/', component: CapacitacionesFormComponent}
 //{path:'capacitaciones-form/estudiante/:id/ ',component: FormCapacitacionComponent},
  

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