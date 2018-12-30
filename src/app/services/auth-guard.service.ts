import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router";
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: RouterExtensions,
    private authService: AuthService,
  ) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.authService.isAuth()) {
      return true;
    } else {
      this.router.navigate(["/login"], { clearHistory: true });
      return false;
    }
  }
}
