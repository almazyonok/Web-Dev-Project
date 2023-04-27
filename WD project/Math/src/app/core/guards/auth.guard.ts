import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivateChild(): boolean {
    return this.checkLogin();
  }

  canActivate(): boolean {
    return this.checkLogin();
  }

  private checkLogin() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true
  }
}
