import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyhttpInterceptor implements HttpInterceptor {

  constructor() { }
  header: {} = {
    token: localStorage.getItem("userToken"),
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (localStorage.getItem('userToken') !== null) {
      request = request.clone({
        setHeaders: this.header,
      })

    }
    return next.handle(request);

  }
}
