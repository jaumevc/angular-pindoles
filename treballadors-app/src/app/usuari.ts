export class Usuari {
    id:number;
    userName:string; 
	password:string; 
    email:string;
    //llargada del phone = 12
    phone:string;
    
    constructor(password:string,email:string,userName?:string,phone?:string){
	    this.password=password;
        this.email=email; 

        if(userName!== undefined){
            this.userName=userName;
        }

        if(phone!== undefined &&  phone.length === 12){
            this.phone=phone;
        }

    }
}
