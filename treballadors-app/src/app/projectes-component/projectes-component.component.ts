import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectes-component',
  templateUrl: './projectes-component.component.html',
  styleUrl: './projectes-component.component.css'
})
export class ProjectesComponentComponent {

  constructor(private router:Router){}

  tornarHome(){
    //posem "" perque es la ruta del home que hem posat en el href del navbar
    this.router.navigate([""]); 
  }
}
