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

  getEdat(){
    return this.edat;
  }

cridaEmpresa(){
  this.empresa = this.nouNomEmpresa;
  this.nouNomEmpresa = ""; 
  }
}
