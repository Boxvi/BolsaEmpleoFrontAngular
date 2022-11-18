import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) }
      /*       { path: '**', redirectTo: '/home', pathMatch: 'full' } */
    ]
  },
  {
    path: 'signUp', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
