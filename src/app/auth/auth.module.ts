import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthHeaderContent} from './components/auth-header/auth-header-content.component';
import {ButtonComponent} from './components/button/button.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthHeaderContent,
    ButtonComponent,
    RecoverPasswordComponent
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
