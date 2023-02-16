import {Component} from '@angular/core';
import {AuthApiService} from "../../services/auth-api.service";
import {Router} from "@angular/router";
import {RegisterUser} from "../../models/register-user.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public regexUsername: RegExp = /^[a-zA-Z0-9_-]{5,15}$/;
  public regexEmail: RegExp = /^[a-zA-Z0-9._-]{3,50}@[a-zA-Z0-9.-]{3,50}\.[a-zA-Z]{2,4}$/;
  public regexPassword: RegExp = /[a-zA-Z\d]{8,30}$/;
  alertMessage: string = '';
  public registerUser: RegisterUser = {
    username: '',
    mail: '',
    password: ''
  };

  constructor(private authApiService: AuthApiService,
              private router: Router) {
  }

  register(registerUser: RegisterUser) {
    this.authApiService.register(registerUser).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        this.alertMessage = error.error.message;
      }
    );
  }
}
