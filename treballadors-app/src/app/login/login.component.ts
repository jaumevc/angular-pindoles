import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }

}
