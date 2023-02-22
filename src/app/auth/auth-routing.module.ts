import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {RecoverPasswordComponent} from "./pages/recover-password/recover-password.component";
import {Error404Component} from "../error404/error404.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'registro', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'recuperar-contrasena', component: RecoverPasswordComponent},
      {path: '**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
