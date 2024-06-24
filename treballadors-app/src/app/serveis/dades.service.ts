import { Injectable } from "@angular/core";
import { Treballador } from "../treballador.model";
import { ServeiTreballadorsService } from "./servei-treballadors.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PropietatExtra } from "../propietatExtra.model";

@Injectable({
    providedIn: 'root'
  })
export class DadesTreballadors{

    private urlGet:string = 'http://localhost:8080/pildoras/angular-rest/treballador/allworkers';
    private urlPost:string = 'http://localhost:8080/pildoras/angular-rest/treballador/addworker';
    private urlPostPropietat:string ='http://localhost:8080/pildoras/angular-rest/propietatextra/addpropietat';
  

    constructor(private serveiPopup: ServeiTreballadorsService,private http:HttpClient){}

    treballadors:Treballador[]=[
        // new Treballador("Susana", "Jiménez", "Directora General", 9000),
        // new Treballador("Mariona", "Valls", "Cap dept Biotec", 5000),
        // new Treballador("Ares", "Valls", "Presidenta", 5000),
        // new Treballador("Jaume", "Valls", "Peó caminer", 1000)
      ];
    
      //optenim estudiants del metode get de la API REST 
      getAllTreballadors():Observable<Treballador[]>{ 

        return this.http.get<Treballador[]>(this.urlGet); 
  
      } 
      
      //afegim un treballador
      addTreballadorServei(treballador: Treballador): Observable<Treballador> {
        this.serveiPopup.mostreMissatge("La presona que afegeixo a la llista:\n" +
           treballador.nom + "\n" + treballador.cognom + "\n" + treballador.carrec + "\n" + treballador.sou);

        // this.treballadors.push(treballador);

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Treballador>(this.urlPost, treballador, { headers });
      }

      addPropietatExtra(propietat:PropietatExtra): Observable<PropietatExtra>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<PropietatExtra>(this.urlPostPropietat, propietat, { headers });
      }
}