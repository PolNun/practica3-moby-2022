import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public regexEmail: RegExp = /^[a-zA-Z0-9._-]{3,50}@[a-zA-Z0-9.-]{3,50}\.[a-zA-Z]{2,4}$/;
  public regexPassword: RegExp = /[a-zA-Z\d]{8,30}$/;

  public loginInputs = [
    {
      labelText: 'Correo electrónico',
      inputType: 'email',
      placeholderText: 'Ingresá tu correo',
      alertText: 'El correo ingresado no es válido',
      isRequired: true,
      regExpPattern: this.regexEmail
    },
    {
      labelText: 'Contraseña',
      inputType: 'password',
      placeholderText: 'Ingresá tu contraseña',
      alertText: 'La contraseña ingresada no es válida',
      isRequired: true,
      regExpPattern: this.regexPassword
    }
  ];

  constructor() {
  }
}
