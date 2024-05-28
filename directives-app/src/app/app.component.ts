import { Component } from '@angular/core';

interface EntradaBlog {
  titolentrada: string;
}

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
  loguejat = false;
  entradesBlog:EntradaBlog[]; 

  constructor(){
    this.entradesBlog = [
      {titolentrada:"Python cada cop més present"},
      {titolentrada:"Java present des de fa més de 20 anys"},
      {titolentrada:"Javascrypt cada cop més funcional"},
      {titolentrada:"Kotlin potència per a les teves apps"},
      {titolentrada:"Pascal on està?"}
    ];
  }

  login(){

    if(this.user.length > 1 
        && this.password.length > 1){
          this.loguejat = true;
      }
    
    // if(this.loguejat){
    //   this.missatge="L\'Usuari: "+this.user+", amb password: "
    //                 +this.password+", S'ha registat correctament."
    // }

    // this.missatge="L\'Usuari: "+this.user+", amb password: "
    //                 +this.password+", S'ha registat correctament."

    this.missatge="L\'Usuari, S'ha registat correctament. ";
  }
}
