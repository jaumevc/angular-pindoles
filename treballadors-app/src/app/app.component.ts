import { Component, OnInit } from '@angular/core';
import { LoginService } from './serveis/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {}
  
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
  
}
