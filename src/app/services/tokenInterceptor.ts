import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as appSettings from "tns-core-modules/application-settings";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private store = appSettings;
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      url: `https://meal.fusionworks.md/api/${request.url}`,
      setHeaders: {
        Authorization: this.store.getString('token'),
        'Content-Type': 'application/json',
      }
    });

    return next.handle(request);
  }
}
