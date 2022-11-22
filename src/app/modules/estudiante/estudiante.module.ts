import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PerfilOcupacionalComponent } from './perfil-ocupacional/perfil-ocupacional.component';
import { EstudianteRoutingModule } from './estudiante-roting.module';



@NgModule({
  declarations: [
    CurriculumComponent,
    PerfilOcupacionalComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
