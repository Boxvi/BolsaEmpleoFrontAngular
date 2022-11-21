import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideempresaComponent } from './empresa/slideempresa/slideempresa.component';
import { RegistroempresaComponent } from './empresa/registroempresa/registroempresa.component';
import { ConcultarcurriculumstablaComponent } from './empresa/concultarcurriculumstabla/concultarcurriculumstabla.component';
import { DatosempresaComponent } from './empresa/datosempresa/datosempresa.component';
import { DatoscontactoComponent } from './empresa/datoscontacto/datoscontacto.component';
import { PublicarofertasComponent } from './empresa/publicarofertas/publicarofertas.component';
import { ModificarofertasComponent } from './empresa/modificarofertas/modificarofertas.component';
import { ConsultarcurriculumsComponent } from './empresa/consultarcurriculums/consultarcurriculums.component';


const routes: Routes = [ 
  {path:'slideempresa',component:SlideempresaComponent},
  {path:'registroempresa',component: RegistroempresaComponent},
  {path:'concultarcurriculumstabla',component: ConcultarcurriculumstablaComponent},
  {path:'datosempresa',component: DatosempresaComponent},
  {path:'datosempresa/:id',component: DatosempresaComponent},
  {path:'datoscontacto',component: DatoscontactoComponent},
  {path:'datoscontacto/:id',component: DatoscontactoComponent},
  {path:'publicarofertas',component: PublicarofertasComponent},
  {path:'modificarofertas',component: ModificarofertasComponent},
  {path:'consultarcurriculums',component: ConsultarcurriculumsComponent},
  {path:'consultarcurriculums/:id',component: ConsultarcurriculumsComponent},
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SlideempresaComponent]
