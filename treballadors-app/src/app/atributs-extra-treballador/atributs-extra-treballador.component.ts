import { Component, EventEmitter, Output } from '@angular/core';
import { ServeiTreballadorsService } from '../serveis/servei-treballadors.service';

@Component({
  selector: 'app-atributs-extra-treballador',
  templateUrl: './atributs-extra-treballador.component.html',
  styleUrl: './atributs-extra-treballador.component.css'
})
export class AtributsExtraTreballadorComponent {

  // @Output() newItemEvent = new EventEmitter<string>();
  @Output() novesCaracteristiques = new EventEmitter<string>();

  constructor(private servei:ServeiTreballadorsService){}

  addNovesCaracteristiques(value: string) {
    this.servei.mostreMissatge("La caracteristica afegida és: "+value)
    //afegeix a la vista la nova propietat extra
    this.novesCaracteristiques.emit(value);
  }

}
