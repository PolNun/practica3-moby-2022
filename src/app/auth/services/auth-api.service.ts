import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {LoginUser} from "../models/login-user.interface";
import {map, Observable, of, tap} from "rxjs";
import {AuthAPIResponse, User} from "../interfaces/auth-api-response.interface";
import {RegisterUser} from "../models/register-user.interface";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private API_URL = 'https://api-auth-moby.herokuapp.com/api/user';

  private _auth: User | undefined;

  public get auth(): User {
    return {...this._auth!};
  }

  public set auth(user: User) {
    this._auth = user;
  }

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public verifyAuth(): Observable<boolean> {
    if (!localStorage.getItem("currentUser")) {
      return of(false);
    }
    return of(true)
      .pipe(
        map(() => {
          // se obtiene el objeto de usuario como alternativa al no tener la lista completa de usuarios
          this.auth = JSON.parse(localStorage.getItem("currentUser")!);
          return true;
        })
      );
  }

  public login(loginUser: LoginUser): Observable<AuthAPIResponse> {
    return this.http.post<AuthAPIResponse>(`${this.API_URL}/login`, loginUser)
      .pipe(
        tap({
          next: ({header, data}: AuthAPIResponse) => {
            if (header.resultCode === 0) {
              this.auth = data.user;
              localStorage.setItem("currentUser", JSON.stringify(this.auth));
            }
          },
          error: ({error}: HttpErrorResponse) => {
            console.log(error);
          }
        })
      )
  }

  public register(registerUser: RegisterUser): Observable<AuthAPIResponse> {
    return this.http.post<AuthAPIResponse>(`${this.API_URL}/register`, registerUser);
  }

  public logout(): void {
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("email");
    this.router.navigate(["/autenticacion"]);
  }
}
