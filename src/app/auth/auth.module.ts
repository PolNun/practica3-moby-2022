import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SideContentComponent} from './components/side-content/side-content.component';
import {ButtonComponent} from './components/button/button.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SideContentComponent,
    ButtonComponent
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
