import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { PerfilocupacionalComponent } from './perfilocupacional/perfilocupacional.component';
import { ListLogrosComponent } from './logros/list-logros/list-logros.component';
import { FormLogroComponent } from './logros/form-logro/form-logro.component';




@NgModule({
  declarations: [
    ResumeComponent,
    PersonalFormComponent,
    ListLogrosComponent,
    FormLogroComponent

  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    SharedModule
  ]
})
export class EstudianteModule { }
