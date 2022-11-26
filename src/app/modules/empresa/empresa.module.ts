import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarOfertasComponent } from './publicar-ofertas/listar-ofertas/listar-ofertas.component';
import { FormOfertasComponent } from './publicar-ofertas/form-ofertas/form-ofertas.component';




@NgModule({
  declarations: [
    ResumeComponent,
    ListarOfertasComponent,
    FormOfertasComponent,
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    SharedModule
  ]
})
export class EmpresaModule { }
