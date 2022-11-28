import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { ListLogrosComponent } from './logros/list-logros/list-logros.component';
import { FormLogroComponent } from './logros/form-logro/form-logro.component';
import { FormsModule} from '@angular/forms';
import { ListCapacitacionesComponent } from './capacitaciones/list-capacitaciones/list-capacitaciones.component';
import { FormCapacitacionComponent } from './capacitaciones/form-capacitacion/form-capacitacion.component';
import { RefPersonalesComponent } from './ref-personales/ref-personales.component';
import { InstFormalComponent } from './inst-formal/inst-formal.component';
import { MiperfilocupacionlComponent } from './perfilocupacional/miperfilocupacionl/miperfilocupacionl.component';
import { FormperfilComponent } from './perfilocupacional/formperfil/formperfil.component';





@NgModule({
  declarations: [
    ResumeComponent,
    PersonalFormComponent,
    ListLogrosComponent,
    FormLogroComponent, 
    ListCapacitacionesComponent,
    FormCapacitacionComponent,
    RefPersonalesComponent,
    InstFormalComponent,
    MiperfilocupacionlComponent,
    FormperfilComponent

  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    SharedModule
  ]
})
export class EstudianteModule { }
