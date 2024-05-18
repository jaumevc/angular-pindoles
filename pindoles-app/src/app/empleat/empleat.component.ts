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
  textDeRegistre = "No hi ha cap usuari registrat";

  getUserLogin(){
      this.userLogin;
  }

  setUserRegistered(event:Event){
    //alert("Usuari registrat amb el txecbox a true!!!");
    // if(this.userLogin = true)
    //   this.textDeRegistre = "Hi ha un usuari registrat";
    // alert(event.target);
    if((<HTMLInputElement>event.target).value=="y"){
      this.textDeRegistre = "Hi ha un usuari registrat";
    }else{
      this.textDeRegistre = "No Hi ha cap usuari registrat";
    }

  }

  getEdat(){
    return this.edat;
  }

cridaEmpresa(){
  this.empresa = this.nouNomEmpresa;
  this.nouNomEmpresa = ""; 
  }
}
