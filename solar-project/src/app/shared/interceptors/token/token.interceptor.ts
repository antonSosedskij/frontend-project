import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem('token');

    if (!request.headers.has('Authorization')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`,
        },
      });
    }
    return next.handle(request);
  }
}
