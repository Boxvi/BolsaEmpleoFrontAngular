import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    SharedModule
  ]
})
export class EmpresaModule { }
