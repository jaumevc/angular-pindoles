export class Treballador{
    //per afegir la propietat extra a la bbdd
    id:number;

    nom:string="";
    cognom:string="";
    carrec:string="";
    sou:number=0;

    constructor(nom:string,cognom:string,carrec:string,sou:number){
        this.nom = nom;
        this.cognom = cognom;
        this.carrec = carrec;
        this.sou = sou;
    }
    

}