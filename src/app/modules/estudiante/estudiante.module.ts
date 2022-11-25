import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { ListLogrosComponent } from './logros/list-logros/list-logros.component';

import { FormLogroComponent } from './logros/form-logro/form-logro.component';

import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { FormsModule} from '@angular/forms';
import { PostulacionOfertasComponent } from './postulacion-ofertas/postulacion-ofertas.component';
import { CapacitacionesFormComponent } from './capacitaciones-form/capacitaciones-form.component';





@NgModule({
  declarations: [
    ResumeComponent,
    PersonalFormComponent,
    ListLogrosComponent,

    FormLogroComponent,

    CapacitacionesComponent,
    CapacitacionesFormComponent,
    PostulacionOfertasComponent,
    CapacitacionesFormComponent

  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    SharedModule
  ]
})
export class EstudianteModule { }
