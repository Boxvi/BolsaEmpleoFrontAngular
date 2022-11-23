import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalFormComponent } from './personal-form/personal-form.component';



@NgModule({
  declarations: [
    ResumeComponent,
    PersonalFormComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    SharedModule
  ]
})
export class EstudianteModule { }
