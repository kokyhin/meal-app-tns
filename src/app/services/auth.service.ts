import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  public token = null;

  public signin(user: Object) {
    return this.http.post('https://meal.fusionworks.md/api/auth/login-mobile', user)
  }

  public isAuth() {
    return this.http.get('https://meal.fusionworks.md/api/auth/is-auth')
  }
}
