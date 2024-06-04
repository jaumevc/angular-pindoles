import { Component, Input } from '@angular/core';
import { Treballador } from '../treballador.model';

@Component({
  selector: 'app-treballador-fill',
  templateUrl: './treballador-fill.component.html',
  styleUrl: './treballador-fill.component.css'
})
export class TreballadorFillComponent {

  @Input() currant:Treballador;
  @Input() k:number;

  //video 25 usem aquest component com a pare de atributs-extra-treballador
  nousAtributs = [''];

  addCaracteristica(novaCaracteristica: string) {
    this.nousAtributs.push(novaCaracteristica);
  }

}
