import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { BodyComponent } from './shared/components/panel/body/body.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
    /*       { path: '**', redirectTo: '/home', pathMatch: 'full' } */
  },
  {
    path: 'signUp', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'panel', component: BodyComponent, children: [
      { path: 'estudiante', loadChildren: () => import('./modules/estudiante/estudiante.module').then((m) => m.EstudianteModule) },
      { path: 'empresa', loadChildren: () => import('./modules/empresa/empresa.module').then((m) => m.EmpresaModule) },
      { path: 'administrador', loadChildren: () => import('./modules/administrador/administrador.module').then((m) => m.AdministradorModule) }
    ], canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
