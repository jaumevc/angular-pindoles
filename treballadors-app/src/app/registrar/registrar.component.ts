import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadesTreballadors } from '../serveis/dades.service';
import { NgForm } from '@angular/forms';
import { Usuari } from '../usuari';

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
    this.userName = form.value.userName;
    this.email = form.value.email;
    this.password = form.value.password;
    this.phone = form.value.phone;
    const usuari = new Usuari(this.password,this.email,this.userName,this.phone);
    this.serveiDades.addNewUser(usuari).subscribe(
      (response) => {
        console.log('Usuari registrat amb èxit:', response);
        alert('Usuari registrat. Comprova el teu correu per confirmar.');
        // Neteja el formulari després de l'intent de login
        form.reset();
      },
      (error) => {
        console.error('Error en registrar l’usuari:', error);
        alert('Hi ha hagut un error en registrar l’usuari.');
        // Neteja el formulari després de l'intent de login
        form.reset();
      }
    );
  }
}
