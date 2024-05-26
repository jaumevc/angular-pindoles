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
  loguejat = false;

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

    this.missatge="L\'Usuari, S'ha registat correctament. "
  }
}
