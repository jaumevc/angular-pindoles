import { Component } from '@angular/core';
import { Treballador } from './treballador.model';
import { ServeiTreballadorsService } from './serveis/servei-treballadors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formulari per afegir treballadors';

  constructor(private servei:ServeiTreballadorsService){}

  treballadors:Treballador[]=[
    new Treballador("Mariona", "Valls", "Cap dept Biotec", 5000),
    new Treballador("Ares", "Valls", "Presidenta", 5000)
  ];

  txtfNom:string="";
  txtfCognom:string="";
  txtfCarrec:string="";
  txtfsou:number=0;

  addNewWorker(){
    // let currant:Treballador= new Treballador(this.txtfNom,this.txtfCognom, this.txtfCarrec, this.txtfsou);
    // this.treballadors.push(currant);

    this.servei.mostreMissatge("Nom Treballador: " +this.txtfNom+" \nCognom Treballador: "+this.txtfCognom+ " \nCarrec Treballador: "+this.txtfCarrec);

    this.treballadors.push(new Treballador(this.txtfNom,this.txtfCognom, this.txtfCarrec, this.txtfsou));
  }


}
