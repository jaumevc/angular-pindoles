
// login.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isUserLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  
  constructor(){}

  get isLoggedIn() {
    return this.isUserLoggedIn.asObservable();
  }

  setLoginStatus(status: boolean) {
    this.isUserLoggedIn.next(status);
    if (status) {
      localStorage.setItem('isUserLoggedIn', 'true');
    } else {
      localStorage.removeItem('isUserLoggedIn');
    }
  }

  hasToken(): boolean {
    return !!localStorage.getItem('isUserLoggedIn');
  }

  logout() {
    this.setLoginStatus(false);
  }
}

