import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titol = 'Registre d\'usuari';
  user:string ="";
  password:string="";
  missatge:string="";

  login(){
    this.missatge="L\'Usuari: "+this.user+", amb password: "+this.password+", S'ha registat correctament."
  }
}
