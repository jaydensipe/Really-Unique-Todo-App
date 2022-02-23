import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let username = "user";
    let password = "password"

    let basicAuthString = "Basic " + window.btoa(username + ":" + password);

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthString
      }
    });

    return next.handle(request);
  }
}
