import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasRoutingModule } from './ofertas-routing.module';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListOfertasComponent
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule,
    SharedModule
  ]
})
export class OfertasModule { }
