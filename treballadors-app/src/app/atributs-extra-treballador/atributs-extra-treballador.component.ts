import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-atributs-extra-treballador',
  templateUrl: './atributs-extra-treballador.component.html',
  styleUrl: './atributs-extra-treballador.component.css'
})
export class AtributsExtraTreballadorComponent {

  @Output() newItemEvent = new EventEmitter<string>();

}
