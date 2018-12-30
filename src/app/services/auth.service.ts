import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { getString } from "application-settings";
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  public signin(user: Object) {
    return this.http.post('auth/login-mobile', user);
  }

  public isAuth() {
    return !!getString('token');
  }
}
