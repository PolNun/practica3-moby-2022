import {Component} from '@angular/core';
import {LoginUser} from "../../models/login-user.interface";
import {AuthApiService} from "../../services/auth-api.service";
import {Router} from "@angular/router";
import {AuthAPIResponse} from "../../interfaces/auth-api-response.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {ResultCodeOpts} from "../../models/ResultCodeOpts";

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
            this.alertMessage = ResultCodeOpts.getMsg(header.resultCode)
          }
        },
        error: ({error}: HttpErrorResponse) => {
          this.alertMessage = ResultCodeOpts.getMsg(error.header.resultCode)
        }
      });
  }

  private redirectUser(userAuthorized: boolean, userName: string): void {
    if (userAuthorized) {
      localStorage.setItem("currentUser", JSON.stringify({name: userName}));
      this.router.navigate(["/personajes"]);
    }
  }
}
