import { Injectable } from "@angular/core";
import { Treballador } from "../treballador.model";

@Injectable({
    providedIn: 'root'
  })
export class DadesTreballadors{


    treballadors:Treballador[]=[
        new Treballador("Susana", "Jiménez", "Directora General", 9000),
        new Treballador("Mariona", "Valls", "Cap dept Biotec", 5000),
        new Treballador("Ares", "Valls", "Presidenta", 5000),
        new Treballador("Jaume", "Valls", "Peó caminer", 1000)
      ];

      addTreballadorServei(treballador:Treballador){
        this.treballadors.push(treballador);
      }
}