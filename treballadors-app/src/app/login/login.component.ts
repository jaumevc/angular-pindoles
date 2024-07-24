import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLogin } from '../userLogin.model';
import { DadesTreballadors } from '../serveis/dades.service';
import { Router } from '@angular/router';
import { LoginService } from '../serveis/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  isUserlogin: boolean = false;
  
  loginError: boolean = false;
  userLogin: UserLogin;
  email: string;
  password:string;

  constructor(private serveiDades: DadesTreballadors,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {}

  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    
    const userLogin = new UserLogin(password, email);
    this.serveiDades.validaLogin(userLogin).subscribe(isLoggedIn => {
      this.loginService.setLoginStatus(isLoggedIn);
      this.isUserlogin = isLoggedIn;
      if (this.isUserlogin) {
        this.router.navigate(['']);
      } else {
        this.loginError = true;
      }
      // Neteja el formulari després de l'intent de login
      form.reset();
    }, error => {
      console.error('Error during login:', error);
      this.loginError = true;
      //netejo els quadres de texte
      form.reset();
    });
    // this.provaLogin()
  }

  // provaLogin() {
  //   const userLogin = new UserLogin(password, email);
  //   this.serveiDades.validaLogin(userLogin).subscribe(isLoggedIn => {
  //     this.isUserlogin = isLoggedIn;
  //     if (this.isUserlogin) {
  //       this.router.navigate(['']);
  //     } else {
  //       this.loginError = true;
  //     }
  //   }, error => {
  //     console.error('Error during login:', error);
  //     this.loginError = true;
  //   });
  // }

}
