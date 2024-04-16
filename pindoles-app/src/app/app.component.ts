import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  selector: 'app-init',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pindoles-app';
  salutacio = "Hola nova propietat per afegir al component html.";
}
