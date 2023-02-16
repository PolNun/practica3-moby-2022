import {Component} from '@angular/core';
import {AuthApiService} from "../../services/auth-api.service";
import {Router} from "@angular/router";
import {RegisterUser} from "../../models/register-user.interface";
import {AuthAPIResponse} from "../../interfaces/auth-api-response.interface";
import {ResultCodeOpts} from "../../models/ResultCodeOpts";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public regexUsername: RegExp = /^[a-zA-Z0-9_-]{5,15}$/;
  public regexEmail: RegExp = /^[a-zA-Z0-9._-]{3,50}@[a-zA-Z0-9.-]{3,50}\.[a-zA-Z]{2,4}$/;
  public regexPassword: RegExp = /[a-zA-Z\d]{8,30}$/;
  public alertMessage: string = '';
  public registerUser: RegisterUser = {
    username: '',
    mail: '',
    password: ''
  };

  constructor(private authApiService: AuthApiService,
              private router: Router) {
  }

  register(registerUser: RegisterUser) {
    this.authApiService.register(registerUser)
      .subscribe({
        next: (response: AuthAPIResponse) => {
          if (response.header.resultCode === 0) {
            this.redirectUserToLogin();
          } else {
            this.alertMessage = ResultCodeOpts.getMsg(response.header.resultCode);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  private redirectUserToLogin(): void {
    this.router.navigate(['/login']);
  }
}
