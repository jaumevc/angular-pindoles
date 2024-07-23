import { Component, OnInit } from '@angular/core';
import { Treballador } from '../treballador.model';
import { DadesTreballadors } from '../serveis/dades.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../serveis/login.service';

@Component({
  selector: 'app-actualitza-component',
  templateUrl: './actualitza-component.component.html',
  styleUrl: './actualitza-component.component.css'
})
export class ActualitzaComponentComponent implements OnInit {
  txtfNom: string = "";
  txtfCognom: string = "";
  txtfCarrec: string = "";
  txtfsou: number = 0;
  //He d'anomenar al id tal i com esta a la classe Treballador, sino me dona un error el routerLink
  //idTreballador:number=0;
  id: number = 0;

  accio: number;

  isUserlogin:boolean = false;

  constructor(private serveiDades: DadesTreballadors,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    //Ens servira per mostrar home html amb *ngIf
    this.loginService.isLoggedIn.subscribe(status => {
      this.isUserlogin = status;
    });

    this.id = this.route.snapshot.params['id'];
    this.txtfNom = this.route.snapshot.params['nom'];
    this.txtfCognom = this.route.snapshot.params['cognom'];
    this.txtfCarrec = this.route.snapshot.params['carrec'];
    this.txtfsou = this.route.snapshot.params['sou'];

    this.accio = parseInt(this.route.snapshot.queryParams['accio']);
  }

  realitzaAccio() {
    if (this.accio == 1) {
      const workerUpdated = new Treballador(this.txtfNom, this.txtfCognom, this.txtfCarrec, this.txtfsou, this.id);

      this.serveiDades.updateTreballador(workerUpdated).subscribe(
        (response) => {
          console.log('Treballador actualitzat:', response);
          this.router.navigate([""]); // Navegar a una altra ruta després de l'actualització
        },
        (error) => {
          console.error('Error al actualitzar treballador:', error);
        }
      );

    } else { 
      this.serveiDades.deleteWorker(this.id).subscribe( //resposta amb ws amb un json
        (response) => {
          console.log('Treballador actualitzat:', response);
          this.router.navigate([""]); // Navegar a una altra ruta després de l'actualització
        },
        (error) => {
          console.error('Error al actualitzar treballador:', error);
        }
      );
    }
  }

  updateWorker() {
    const workerUpdated = new Treballador(this.txtfNom, this.txtfCognom, this.txtfCarrec, this.txtfsou, this.id);
    //this.serveiDades.updateTreballador(workerUpdated);

    this.serveiDades.updateTreballador(workerUpdated).subscribe(
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

  //Modifica el teu controlador Spring Boot per retornar una resposta JSON:
  deleteWorkerRespostaWSJson() {

    this.serveiDades.deleteWorker(this.id).subscribe( //resposta amb ws amb un json
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

  //Modifica el teu controlador Spring Boot per retornar una resposta JSON:
  deleteTreballadorRespostaWSText() {
    this.serveiDades.deleteTreballador(this.id).subscribe( //resposta amb text pla
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
