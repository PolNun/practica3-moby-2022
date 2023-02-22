import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuard} from "./auth/guards/authentication.guard";

const routes: Routes = [
  {
    path: 'autenticacion',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'contenido',
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule),
    canMatch: [AuthenticationGuard],
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    redirectTo: 'autenticacion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
