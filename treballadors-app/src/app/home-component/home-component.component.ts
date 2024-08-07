import { Component, OnInit } from '@angular/core';
import { Treballador } from '../treballador.model';
import { PropietatExtra } from '../propietatExtra.model';
import { ServeiTreballadorsService } from '../serveis/servei-treballadors.service';
import { DadesTreballadors } from '../serveis/dades.service';
import { UserLogin } from '../userLogin.model';
import { LoginService } from '../serveis/login.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {

  title = 'Formulari per afegir treballadors';
  txtfNom: string = "";
  txtfCognom: string = "";
  txtfCarrec: string = "";
  txtfsou: number = 0;
  treballadors: Treballador[] = [];
  // treballadors:Treballador[]=[
  //   new Treballador("Mariona", "Valls", "Cap dept Biotec", 5000),
  //   new Treballador("Ares", "Valls", "Presidenta", 5000)
  // ];
  propietatExtra: PropietatExtra[] = [];

  isUserlogin: boolean = false;

  constructor(private servei: ServeiTreballadorsService,
    private serveiDades: DadesTreballadors,
    private loginService: LoginService) {
    //this.treballadors = this.serveiDades.treballadors;
  }
  ngOnInit(): void {
    //Ens servira per mostrar home html amb *ngIf
    this.loginService.isLoggedIn.subscribe(status => {
      this.isUserlogin = status;
    });


    //this.treballadors = this.serveiDades.treballadors;
    this.serveiDades.getAllTreballadors().subscribe(data => {
      this.treballadors = data;
    });


  }

  addNewWorker() {
    // let currant:Treballador= new Treballador(this.txtfNom,this.txtfCognom, this.txtfCarrec, this.txtfsou);
    // this.treballadors.push(currant);

    //Exemple de crida entre serveis
    this.servei.mostreMissatge("Nom Treballador: " + this.txtfNom + " \nCognom Treballador: " +
      this.txtfCognom + " \nCarrec Treballador: " + this.txtfCarrec);

    // this.treballadors.push(new Treballador(this.txtfNom,this.txtfCognom, this.txtfCarrec, this.txtfsou));
    // this.serveiDades.addTreballadorServei(new Treballador(
    //    this.txtfNom,this.txtfCognom, this.txtfCarrec, this.txtfsou));

    const nouTreballador = new Treballador(this.txtfNom, this.txtfCognom, this.txtfCarrec, this.txtfsou);
    this.serveiDades.addTreballadorServei(nouTreballador).subscribe(data => {
      this.treballadors.push(data);
    }, error => {
      console.error("Error en afegir el treballador", error);
    });

  }
}
