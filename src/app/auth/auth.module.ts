import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthHeaderContent} from './components/side-content/auth-header-content.component';
import {ButtonComponent} from './components/button/button.component';
import {InputComponent} from './components/input/input.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthHeaderContent,
    ButtonComponent,
    InputComponent
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
