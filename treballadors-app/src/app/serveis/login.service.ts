
// login.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isUserLoggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(){}

  get isLoggedIn() {
    return this.isUserLoggedIn.asObservable();
  }

  setLoginStatus(status: boolean) {
    this.isUserLoggedIn.next(status);
  }
}

