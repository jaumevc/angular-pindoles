import { Treballador } from "./treballador.model";

export class PropietatExtra{
   
    id:number;
    propietat:string="";
  
    constructor(propietat:string, treballador:Treballador){
        this.id = treballador.id;
        this.propietat = propietat;
    }
    
}