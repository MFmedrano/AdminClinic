import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})


export class ProgressComponent {

  parametro1 : number = 10;
  parametro2 : number = 25;

  getProgreso1 (){
    return `${this.parametro1}%`;
  }

  getProgreso2 (){
    return `${this.parametro2}%`;
  }

  cambioValorHijo(valor:number){    
    console.log("!",valor);
  }
  // constructor() { }  
  // ngOnInit(): void {
  // }
  // progreso: number= 10;
  
  // get getPorcentaje(){
  //   return `${this.progreso}%`;
  // }

  // cambiarValor(valor:number){

  //   if(this.progreso >= 100 && this.progreso >= 0 ){
  //      return this.progreso = 100;
  //   }
    
  //   if(this.progreso <= 0 && this.progreso < 0 ){
  //       return this.progreso = 0;
  //   }

  //   return (this.progreso += valor);
  // }


}
