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
  //nousAtributs = [''];

  propietatsExtra: PropietatExtra[] = [];
  novaPropietat: string = '';

  constructor( private serveiDades:DadesTreballadors){}

  ngOnInit(): void {
     this.serveiDades.getPropsXtraByWorker().subscribe(dades => {
      console.log('Dades Propietats Extra: ', dades , '.Del treballador: ', this.currant);
      this.propietatsExtra = dades[this.currant.id] || [];
      console.log('Propietats Extra: ',this.propietatsExtra, 'del Treballador:', this.currant);
    });
  }

  addCaracteristica(novaCaracteristica: PropietatExtra) {
    if (novaCaracteristica.propietat.trim() !== '') {
      this.propietatsExtra.push(novaCaracteristica);
    }
  }

}
