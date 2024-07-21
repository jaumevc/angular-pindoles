import { Injectable } from "@angular/core";
import { Treballador } from "../treballador.model";
import { ServeiTreballadorsService } from "./servei-treballadors.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";
import { PropietatExtra } from "../propietatExtra.model";
import { UserLogin } from "../userLogin.model";

@Injectable({
    providedIn: 'root'
  })
export class DadesTreballadors{
    //OPERACIONS BBDD TREBALLADOR
    private urlGet:string = 'http://localhost:8080/pildoras/angular-rest/treballador/allworkers';
    private urlPost:string = 'http://localhost:8080/pildoras/angular-rest/treballador/addworker';

    private urlPut:string = 'http://localhost:8080/pildoras/angular-rest/treballador/updatetreballador';

    private urlDelText:string = 'http://localhost:8080/pildoras/angular-rest/treballador/eliminatreballador';
    private urlDelJson:string = 'http://localhost:8080/pildoras/angular-rest/treballador/deleteworker';
    
    //OPERACIONS BBDD PROPIETAT-EXTRA
    private urlGetPropsXtraByWorker:string ='http://localhost:8080/pildoras/angular-rest/propietatextra/propietatsbyworker';
    private urlPostPropietat:string ='http://localhost:8080/pildoras/angular-rest/propietatextra/addpropietat';

    //OPERACIONS BBDD LOGINS
    private urlPostValidaLogin:string = "http://localhost:8080/pildoras/angular-rest/login/validalogin";
    private urlPostAddUserLogin:string = "http://localhost:8080/pildoras/angular-rest/login/adduserlogin";

    constructor(private serveiPopup: ServeiTreballadorsService,private http:HttpClient){}

    //treballadors:Treballador[]=[
        // new Treballador("Susana", "Jiménez", "Directora General", 9000),
        // new Treballador("Mariona", "Valls", "Cap dept Biotec", 5000),
        // new Treballador("Ares", "Valls", "Presidenta", 5000),
        // new Treballador("Jaume", "Valls", "Peó caminer", 1000)];
    
    //propietatExtra:PropietatExtra[]=[];

    // Mètode per eliminar un treballador pero amb servei rest retronant un json
    deleteWorker(id: number): Observable<string> {
      const deleteUrl = `${this.urlDelJson}/${id}`;
      return this.http.delete<string>(deleteUrl);
    }

    //resposta amb text pla
    deleteTreballador(id: number): Observable<string> {
    const deleteUrl = `${this.urlDelText}/${id}`;
    return this.http.delete(deleteUrl, { responseType: 'text' });
    }

    updateTreballador(treballador:Treballador): Observable<Treballador> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put<Treballador>(this.urlPut,treballador,{ headers });
    }

    //optenim estudiants del metode get de la API REST 
    getAllTreballadors():Observable<Treballador[]>{ 
      return this.http.get<Treballador[]>(this.urlGet); 
    } 
    
    //afegim un treballador
    addTreballadorServei(treballador: Treballador): Observable<Treballador> {
      //exemple de crida entre serveis
      this.serveiPopup.mostreMissatge("La presona que afegeixo a la llista:\n" +
          treballador.nom + "\n" + treballador.cognom + "\n" + treballador.carrec + "\n" + treballador.sou);
      // this.treballadors.push(treballador);
      //afegim teeballador per post
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<Treballador>(this.urlPost, treballador, { headers });
    }

    //obtenim les propietats extra per a cada treballador 
    getPropsXtraByWorker(): Observable<{ [id: number]: PropietatExtra[] }> {
      return this.http.get<{ [id: number]: PropietatExtra[] }>(this.urlGetPropsXtraByWorker);
    }

    //afegim una propietat extra al treballador corresponent
    addPropietatExtra(propietatExtra:PropietatExtra): Observable<PropietatExtra>{
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<PropietatExtra>(this.urlPostPropietat,propietatExtra,{headers});
    }

    validaLogin(userLogin:UserLogin):Observable<UserLogin>{
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<UserLogin>(this.urlPostValidaLogin,UserLogin,{headers});
    }
}