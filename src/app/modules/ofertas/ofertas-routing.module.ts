import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';

const routes: Routes = [
  { path: '', component: ListOfertasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }
