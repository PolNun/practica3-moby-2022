import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {AuthApiService} from "../services/auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanMatch {

  constructor(private authApiService: AuthApiService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authApiService.verifyAuth()
      .pipe(
        tap({
          next: (isAuth: boolean) => {
            if (!isAuth) {
              this.router.navigate(['/auth/login']);
            } else {
              localStorage.setItem("currentUser", JSON.stringify(this.authApiService.auth));
            }
          }
        })
      );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authApiService.verifyAuth()
      .pipe(
        tap({
          next: (isAuth: boolean) => {
            if (!isAuth) {
              this.router.navigate(['/auth/login']);
            }
          }
        })
      );
  }
}
