import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth : AuthService, private toast: NgToastService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken(); 
    if ( myToken)
    {
      request = request.clone({
        setHeaders: {Authorization: `Baerer ${myToken}`}
      }) 
    }

    return next.handle(request).pipe(
      catchError((err:any)=>{
        if (err instanceof HttpErrorResponse)
        {
          if(err.error === 401)
          {
            this.toast.warning({detail:"Warning",summary: "Token Expire login again",duration:5000});
            this.router.navigate(['login']);
          }
        }
        return throwError(()=> new Error("Some other error occured"))
      }
      )
    );
  }
}
