import { Component, Input, OnInit } from '@angular/core';
import { Treballador } from '../treballador.model';
import { DadesTreballadors } from '../serveis/dades.service';
import { PropietatExtra } from '../propietatExtra.model';

@Component({
  selector: 'app-treballador-fill',
  templateUrl: './treballador-fill.component.html',
  styleUrl: './treballador-fill.component.css'
})
export class TreballadorFillComponent implements OnInit {

  @Input() currant:Treballador;
  @Input() k:number;

  //video 20 usem aquest component com a pare de atributs-extra-treballador
  nousAtributs = [''];

  propietatsExtra: PropietatExtra[] = [];
  novaPropietat: string = '';

  constructor( private serveiDades:DadesTreballadors){}

  ngOnInit(): void {
     this.serveiDades.getPropsXtraByWorker().subscribe(dades => {
      console.log('Dades Propietats Extra:', dades);
      console.log('Treballador Actual:', this.currant);
      this.propietatsExtra = dades[this.currant.id] || [];
      console.log('Propietats Extra per al Treballador:', this.propietatsExtra);
    });
  }

  addCaracteristica(novaCaracteristica: string) {
    //this.nousAtributs.push(novaCaracteristica);
    if (novaCaracteristica.trim() !== '') {
      this.nousAtributs.push(novaCaracteristica);
      this.novaPropietat = '';  // Reset input field after adding
    }
  }

}
