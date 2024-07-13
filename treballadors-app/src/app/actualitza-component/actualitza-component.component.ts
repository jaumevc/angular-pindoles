import { Component } from '@angular/core';
import { Treballador } from '../treballador.model';
import { DadesTreballadors } from '../serveis/dades.service';

@Component({
  selector: 'app-actualitza-component',
  templateUrl: './actualitza-component.component.html',
  styleUrl: './actualitza-component.component.css'
})
export class ActualitzaComponentComponent {
  txtfNom:string="";
  txtfCognom:string="";
  txtfCarrec:string="";
  txtfsou:number=0;
  id:number=0;

  constructor( private serveiDades:DadesTreballadors){}

  updateWorker(){
    const nouTreballador = new Treballador(this.txtfNom, this.txtfCognom, this.txtfCarrec, this.txtfsou);
    this.serveiDades.updateTreballador(nouTreballador);
  }
}
