import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: AppComponent, children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
