export class Treballador{
    //per afegir la propietat extra a la bbdd
    id:number=0;

    nom:string="";
    cognom:string="";
    carrec:string="";
    sou:number=0;

    constructor(nom:string,cognom:string,carrec:string,sou:number, id?:number){
        this.nom = nom;
        this.cognom = cognom;
        this.carrec = carrec;
        this.sou = sou;

        if(id !== undefined){
            this.id = id;
        }
    } 
    
}