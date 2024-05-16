import { Component } from '@angular/core';

@Component({
  selector: 'app-empleat',
  templateUrl: './empleat.component.html',
  //template:"<p>empleat works INLINE!</p>",
  styleUrl: './empleat.component.css'
  //styles:["p{background-color: green;}"]
})
export class EmpleatComponent {
  nom = "Jaume";
  cognom = "Valls";
  empresa = "Company & Co";
  private edat = 18;
  nouNomEmpresa: string = "";
  // textfieldPropertie = true;
  textfieldPropertie = false;
  userLogin = false;

  getUserLogin(){
      this.userLogin;
  }

  setUserRegistered(){
    alert("Usuari registrat amb el txecbox a true!!!");
  }

  getEdat(){
    return this.edat;
  }

cridaEmpresa(){
  this.empresa = this.nouNomEmpresa;
  this.nouNomEmpresa = ""; 
  }
}
