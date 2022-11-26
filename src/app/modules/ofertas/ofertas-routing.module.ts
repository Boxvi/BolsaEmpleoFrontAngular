import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleofertaComponent } from './detalleoferta/detalleoferta.component';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';

const routes: Routes = [
  { path: '', component: ListOfertasComponent },
  {path:'oferta/detalle/:id',component: DetalleofertaComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }
