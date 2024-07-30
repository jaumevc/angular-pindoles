import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadesTreballadors } from '../serveis/dades.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {

  constructor(private serveiDades: DadesTreballadors,
    private router: Router) { }

  ngOnInit(): void { }
}
