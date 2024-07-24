import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (!loginService.hasToken()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};

//amb implements CanActive funciona pero esta deprecat per a la versio d'angular que uso

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
// import { LoginService } from './login.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private loginService: LoginService, private router: Router) {}

//   canActivate(): boolean {
//     if (!this.loginService.hasToken()) {
//       this.router.navigate(['/login']);
//       return false;
//     }
//     return true;
//   }

// }
