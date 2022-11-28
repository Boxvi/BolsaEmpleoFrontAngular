import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormLogroComponent } from "./logros/form-logro/form-logro.component";
import {FormCapacitacionComponent} from './capacitaciones/form-capacitacion/form-capacitacion.component';

import { ListLogrosComponent } from "./logros/list-logros/list-logros.component";
import { PersonalFormComponent } from "./personal-form/personal-form.component";
import { ResumeComponent } from "./resume/resume.component";
import{ListCapacitacionesComponent} from './capacitaciones/list-capacitaciones/list-capacitaciones.component'
import { RefPersonalesComponent } from "./ref-personales/ref-personales.component";
import { InstFormalComponent } from "./inst-formal/inst-formal.component";
import { MiperfilocupacionlComponent } from "./perfilocupacional/miperfilocupacionl/miperfilocupacionl.component";
import { FormperfilComponent } from "./perfilocupacional/formperfil/formperfil.component";

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'personal-form', component: PersonalFormComponent },
  { path: 'personal-form/:id', component: PersonalFormComponent },
  { path: 'logros/estudiante/:id', component: ListLogrosComponent },

  { path: 'logros-form', component: FormLogroComponent },
  { path: 'logros-form/:id', component: FormLogroComponent },

  {path: 'capacitaciones/estudiante/:id', component:ListCapacitacionesComponent},
  {path:'capacitacion-form', component:FormCapacitacionComponent},
  {path: 'capacitacion-form/:id', component:FormCapacitacionComponent},

  { path: 'ref-personales', component: RefPersonalesComponent},
  { path: 'inst-formal', component: InstFormalComponent},
  {path:'perfilOcupacional/estudiante/:id',component: MiperfilocupacionlComponent},
  {path:'perfilOcupacional/form', component: FormperfilComponent},
  { path:'perfilOcupacional/form/:id',component:FormperfilComponent},



  /*}
 //{path:'capacitaciones-form/estudiante/:id/ ',component: FormCapacitacionComponent},
  

  /* {path:'preferenciasLaborales/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'perfilOcupacional/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
   { path:'instruccionFormal/estudiante/:id',component: InstFormalComponent },
  /* {path:'capacitaciones/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'referenciasProfesionales/estudiante/:id',component: 🎈🎈Aquí va el nombre del componente } */
   { path:'referenciasPersonales/estudiante/:id',component: RefPersonalesComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }