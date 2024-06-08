import { Injectable } from "@angular/core";
import { Treballador } from "../treballador.model";
import { ServeiTreballadorsService } from "./servei-treballadors.service";

@Injectable({
    providedIn: 'root'
  })
export class DadesTreballadors{

    constructor(private serveiPopup: ServeiTreballadorsService){}

    treballadors:Treballador[]=[
        new Treballador("Susana", "Jiménez", "Directora General", 9000),
        new Treballador("Mariona", "Valls", "Cap dept Biotec", 5000),
        new Treballador("Ares", "Valls", "Presidenta", 5000),
        new Treballador("Jaume", "Valls", "Peó caminer", 1000)
      ];

      addTreballadorServei(treballador:Treballador){
        this.serveiPopup.mostreMissatge("La presona que afegeixo a la llista:\n" +
          treballador.nom + "\n" + treballador.cognom );
          
        this.treballadors.push(treballador);
      }
}