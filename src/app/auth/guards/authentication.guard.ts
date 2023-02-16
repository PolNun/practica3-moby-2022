import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthApiService} from "../services/auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanMatch {

  constructor(private authApiService: AuthApiService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authApiService.auth?.id) {
      return true;
    }
    return true;
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authApiService.auth?.id) {
      return true;
    }
    return false;
  }
}
