import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {getTokenAtPosition} from "@angular/compiler-cli/src/ngtsc/util/src/typescript";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> | Observable<any> {
    let token = localStorage.getItem('token')
    if (token) {
      let request = req.clone({
        headers: req.headers.set('Authorization', `Token ${token}`),
      });
      return next.handle(request).pipe(
        catchError(error => {
            this.checkAuthorized(error)
            return throwError(error);
          }
        )
      );
    } else {
      return next.handle(req);
    }
  }

  private checkAuthorized(error: HttpErrorResponse) {
    if (error.status === 401) {
      localStorage.clear()
      this.router.navigate(['auth/login'])
    }
  }
}
