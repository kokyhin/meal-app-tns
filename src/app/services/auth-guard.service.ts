import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.isAuth().pipe(
      take(1),
      map(user => {
        return !!user;
      }),
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
    }));
  }
}
