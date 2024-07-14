import { Component, OnInit } from '@angular/core';
import { Treballador } from '../treballador.model';
import { DadesTreballadors } from '../serveis/dades.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualitza-component',
  templateUrl: './actualitza-component.component.html',
  styleUrl: './actualitza-component.component.css'
})
export class ActualitzaComponentComponent implements OnInit{
  txtfNom:string="";
  txtfCognom:string="";
  txtfCarrec:string="";
  txtfsou:number=0;
  //He d'anomenar al id tal i com esta a la classe Treballador, sino me dona un error el routerLink
  //idTreballador:number=0;
  id:number=0;

  constructor( private serveiDades:DadesTreballadors,
               private route:ActivatedRoute,
               private router:Router){}
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.txtfNom= this.route.snapshot.params['nom'];
    this.txtfCognom= this.route.snapshot.params['cognom'];
    this.txtfCarrec= this.route.snapshot.params['carrec'];
    this.txtfsou= this.route.snapshot.params['sou'];
  }

  updateWorker(){
    const workerUpdated = new Treballador(this.txtfNom, this.txtfCognom, this.txtfCarrec, this.txtfsou, this.id);
    //this.serveiDades.updateTreballador(workerUpdated);

    this.serveiDades.updateTreballador(workerUpdated)
      .subscribe(
        (response) => {
          console.log('Treballador actualitzat:', response);
          this.router.navigate([""]); // Navegar a una altra ruta després de l'actualització
        },
        (error) => {
          console.error('Error al actualitzar treballador:', error);
          // Aquí pots gestionar l'error, com mostrar un missatge d'error a l'usuari
        }
      );
  }
}
