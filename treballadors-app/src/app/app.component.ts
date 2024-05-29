import { Component } from '@angular/core';
import { Treballador } from './treballador.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formulari per afegir treballadors';

  treballadors:Treballador[]=[
    new Treballador("Mariona", "Valls", "Cap dept Biotec", 5000),
    new Treballador("Ares", "Valls", "Presidenta", 5000)
  ];

}
