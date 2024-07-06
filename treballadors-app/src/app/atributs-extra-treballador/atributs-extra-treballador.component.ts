import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ServeiTreballadorsService } from '../serveis/servei-treballadors.service';
import { Treballador } from '../treballador.model';
import { PropietatExtra } from '../propietatExtra.model';
import { DadesTreballadors } from '../serveis/dades.service';

@Component({
  selector: 'app-atributs-extra-treballador',
  templateUrl: './atributs-extra-treballador.component.html',
  styleUrl: './atributs-extra-treballador.component.css'
})
export class AtributsExtraTreballadorComponent {

  // @Output() newItemEvent = new EventEmitter<string>();
  // @Output() novesCaracteristiques = new EventEmitter<string>();
  @Output() novesCaracteristiques = new EventEmitter<PropietatExtra>();
  // Afegeix aquesta línia per obtenir el treballador actual
  @Input() treballador: Treballador;  

  // per buidar el text field 
  @ViewChild('novaCarateristica') novaCarateristicaInput: ElementRef;

  constructor(
    private servei:ServeiTreballadorsService,
    private dadesServei: DadesTreballadors
  ){}

  addNovesCaracteristiques(value: string) {
    //this.servei.mostreMissatge("La caracteristica afegida és: "+value)
    //afegeix a la vista la nova propietat extra
    //this.novesCaracteristiques.emit(value);

    // Crea l'objecte PropietatExtra
    const novaPropietat = new PropietatExtra(0, value, this.treballador);  
    this.dadesServei.addPropietatExtra(novaPropietat).subscribe(
      (propietat) => {
        this.servei.mostreMissatge("La caracteristica afegida és: " + value);
        // Emet l'objecte retornat
        this.novesCaracteristiques.emit(propietat);  
        // Buidem el camp de text
        this.novaCarateristicaInput.nativeElement.value = '';  
      },
      (error) => {
        console.error("Error en afegir la propietat extra", error);
      }
    );
  }

}
