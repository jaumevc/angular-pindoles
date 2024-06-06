import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiTreballadorsService {

  constructor() { }

  mostreMissatge(missatge:string){
    alert(missatge);
  }
}
