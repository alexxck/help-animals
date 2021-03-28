import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { UserAuthService } from '../../modules/shared/services/user-auth-service/user-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService : UserAuthService) {}

  // Что бы интерсептор заработал ему нужен HTTPCLEINTMODULE, но он уже экспортирован в главный, тоесть шаред модуль нужно экспортнуть в главный
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return of(this.authService.getToken()).pipe(
      mergeMap( (token) => {
        const authRequest = token ?  request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        }) : request;
        console.log(authRequest);
        return next.handle(authRequest).pipe(
          catchError( error => {
            if(error instanceof HttpErrorResponse){
              if (error.status === 401) {
                console.log('Redirect to login page');
                return EMPTY;
              }
            }
            throw error
          }))
      }),
    );
  }
}
