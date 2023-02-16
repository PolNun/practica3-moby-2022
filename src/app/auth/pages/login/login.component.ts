import {Component} from '@angular/core';
import {LoginUser} from "../../models/login-user.interface";
import {AuthApiService} from "../../services/auth-api.service";
import {Router} from "@angular/router";
import {AuthAPIResponse} from "../../interfaces/auth-api-response.interface";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public regexEmail: RegExp = /^[a-zA-Z0-9._-]{3,50}@[a-zA-Z0-9.-]{3,50}\.[a-zA-Z]{2,4}$/;
  public regexPassword: RegExp = /[a-zA-Z\d]{8,30}$/;
  public alertMessage: string = '';
  public isLoggedIn: boolean = false;

  public loginUser: LoginUser = {
    mail: '',
    password: ''
  }

  constructor(private authApiService: AuthApiService,
              private router: Router) {
  }

  login(loginUser: LoginUser) {
    this.authApiService.login(loginUser)
      .subscribe({
        next: ({header, data}: AuthAPIResponse) => {
          if (header.resultCode === 0) {
            this.isLoggedIn = true;
            this.redirectUser(this.isLoggedIn, data.user.name);
          } else {
            this.alertMessage = this.resultCodeMessage(header.resultCode);
          }
        },
        error: ({error}: HttpErrorResponse) => {
          this.alertMessage = this.resultCodeMessage(error.header.resultCode);
        }
      });
  }

  resultCodeMessage(resultCode: number): string {
    // TODO acomodar este método dejando únicamente los case útiles para login
    let message: string;
    switch (resultCode) {
      case 1:
        message = "Mail ya registrado";
        break;
      case 2:
        message = "Error en la validación";
        break;
      case 3:
        message = "Usuario no encontrado";
        break;
      case 4:
        message = "Contraseña inválida";
        break;
      case 5:
        message = "No autorizado";
        break;
      case 6:
        message = "No modificado";
        break;
      case 7:
        message = "Usuario desactivado";
        break;
      case 8:
        message = "Tiempo de modificación expirado";
        break;
      case 9:
        message = "Error desconocido";
        break;
      case 10:
        message = "Post no encontrado";
        break;
      case 11:
        message = "Comentario no encontrado";
        break;
      default:
        message = "Revisá los campos";
    }
    return message;
  }

  private redirectUser(userAuthorized: boolean, userName: string): void {
    if (userAuthorized) {
      localStorage.setItem("currentUser", JSON.stringify({name: userName}));
      this.router.navigate(["/personajes"]);
    }
  }
}
