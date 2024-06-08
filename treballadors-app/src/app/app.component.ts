import { Component, OnInit } from '@angular/core';
import { Treballador } from './treballador.model';
import { ServeiTreballadorsService } from './serveis/servei-treballadors.service';
import { DadesTreballadors } from './serveis/dades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Formulari per afegir treballadors';
  txtfNom:string="";
  txtfCognom:string="";
  txtfCarrec:string="";
  txtfsou:number=0;
  treballadors:Treballador[]=[];
   // treballadors:Treballador[]=[
  //   new Treballador("Mariona", "Valls", "Cap dept Biotec", 5000),
  //   new Treballador("Ares", "Valls", "Presidenta", 5000)
  // ];

  constructor(private servei:ServeiTreballadorsService, 
              private serveiDades:DadesTreballadors){
    //this.treballadors = this.serveiDades.treballadors;
  }
  ngOnInit(): void {
    this.treballadors = this.serveiDades.treballadors;
  }

  addNewWorker(){
    // let currant:Treballador= new Treballador(this.txtfNom,this.txtfCognom, this.txtfCarrec, this.txtfsou);
    // this.treballadors.push(currant);

    this.servei.mostreMissatge("Nom Treballador: " +this.txtfNom+" \nCognom Treballador: "+this.txtfCognom+ " \nCarrec Treballador: "+this.txtfCarrec);

    // this.treballadors.push(new Treballador(this.txtfNom,this.txtfCognom, this.txtfCarrec, this.txtfsou));
    this.serveiDades.addTreballadorServei(new Treballador(this.txtfNom,this.txtfCognom, this.txtfCarrec, this.txtfsou));
  }


}
