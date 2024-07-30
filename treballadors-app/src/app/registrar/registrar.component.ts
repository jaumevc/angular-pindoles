import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadesTreballadors } from '../serveis/dades.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {

  userName:string; 
	password:string; 
  email:string;
  phone:string; //llargada del phone = 12: +34973973333

  constructor(private serveiDades: DadesTreballadors,
    private router: Router) { }

  ngOnInit(): void { }

  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }
}
