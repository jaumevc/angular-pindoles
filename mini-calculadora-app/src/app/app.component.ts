import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';
  num1:number=0;
  num2:number=0;
  //  num1:string= "0";
  //  num2:string= "0";
   result:number=0;

  sumar():void{
    // this.result = Number(this.num1) + Number(this.num2);
    // this.result = parseInt(this.num1) + parseInt(this.num2);
    this.result = this.num1 + this.num2;
  }

  restar():void{
    this.result = this.num1-this.num2;
    //  this.result = parseInt(this.num1)-parseInt(this.num2);
  }

  multiplicar():void{
    this.result = this.num1*this.num2;
    // this.result = parseInt(this.num1)*parseInt(this.num2);
  }

  dividir():void{
    this.result = this.num1/this.num2;
    // this.result = Number(this.num1)/Number(this.num2);
  }
}
