import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  public signin(user: Object) {
    return this.http.post('auth/login-mobile', user)
  }

  public isAuth() {
    return this.http.get('auth/is-auth')
  }
}
