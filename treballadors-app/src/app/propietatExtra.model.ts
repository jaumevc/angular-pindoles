import { Treballador } from "./treballador.model";

export class PropietatExtra{
   
    idPropietat:number;
    propietat:string="";
    idTreballador: number;
  
    constructor(idPropietat: number, propietat:string, treballador:Treballador){
        this.idPropietat = idPropietat;
        this.propietat = propietat;
        this.idTreballador = treballador.id;
    }
    
}