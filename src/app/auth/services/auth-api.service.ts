import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {LoginUser} from "../models/login-user.interface";
import {Observable} from "rxjs";
import {AuthAPIResponse, User} from "../interfaces/auth-api-response.interface";
import {RegisterUser} from "../models/register-user.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private API_URL = 'https://api-auth-moby.herokuapp.com/api/user';

  private _auth: User | undefined;

  get auth(): User | undefined {
    return this._auth;
  }

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public login(loginUser: LoginUser): Observable<AuthAPIResponse> {
    return this.http.post<AuthAPIResponse>(`${this.API_URL}/login`, loginUser);
  }

  public register(registerUser: RegisterUser): Observable<AuthAPIResponse> {
    return this.http.post<AuthAPIResponse>(`${this.API_URL}/register`, registerUser);
  }

  public logout(): void {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/login"]);
  }
}
