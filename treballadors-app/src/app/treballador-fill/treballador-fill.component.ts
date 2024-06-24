import { Component, Input } from '@angular/core';
import { Treballador } from '../treballador.model';
import { DadesTreballadors } from '../serveis/dades.service';
import { PropietatExtra } from '../propietatExtra.model';

@Component({
  selector: 'app-treballador-fill',
  templateUrl: './treballador-fill.component.html',
  styleUrl: './treballador-fill.component.css'
})
export class TreballadorFillComponent {

  @Input() currant:Treballador;
  @Input() k:number;

  //video 20 usem aquest component com a pare de atributs-extra-treballador
  nousAtributs = [''];

  constructor( private serveiDades:DadesTreballadors){}

  addCaracteristica(novaCaracteristica: string) {
    this.nousAtributs.push(novaCaracteristica);
  }

 
  // addPropietatExtra(novaCaracteristica: string) {
  //   const propietatExtra = new PropietatExtra(novaCaracteristica, this.currant);

  //   this.serveiDades.addPropietatExtra(propietatExtra).subscribe(
  //     (data) => {
  //       console.log('Propietat extra afegida amb èxit:', data);
  //       this.nousAtributs.push(novaCaracteristica); // Afegim la nova propietat a la llista
  //       this.nousAtributs = ['']; // Netegem el camp després d'afegir
  //     },
  //     (error) => {
  //       console.error('Error en afegir la propietat extra:', error);
  //     }
  //   );
  // }

}
