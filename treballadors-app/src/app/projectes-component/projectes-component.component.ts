import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadesTreballadors } from '../serveis/dades.service';
import { Treballador } from '../treballador.model';
import { LoginService } from '../serveis/login.service';

@Component({
  selector: 'app-projectes-component',
  templateUrl: './projectes-component.component.html',
  styleUrl: './projectes-component.component.css'
})
export class ProjectesComponentComponent implements OnInit {

  txtfNom:string="";
  txtfCognom:string="";
  txtfCarrec:string="";
  txtfsou:number=0;
  treballadors:Treballador[]=[];

  isUserlogin:boolean;// =false;

  constructor(private router:Router,
    private serveiDades:DadesTreballadors,
    private loginService:LoginService
  ){}

  ngOnInit(): void {
    //Ens servira per mostrar home html amb *ngIf
    this.loginService.isLoggedIn.subscribe(status => {
      this.isUserlogin = status;
    });
  }

  tornarHome(){
    //posem "" perque es la ruta del home que hem posat en el href del navbar
    this.router.navigate([""]); 
  }

  addNewWorker(){
    const nouTreballador = new Treballador(this.txtfNom, this.txtfCognom, this.txtfCarrec, this.txtfsou);
    this.serveiDades.addTreballadorServei(nouTreballador).subscribe(data => {
      this.treballadors.push(data);
    }, error => {
      console.error("Error en afegir el treballador", error);
    });

    this.tornarHome();
  }
}
