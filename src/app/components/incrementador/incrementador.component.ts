import { Component, Input, Output ,EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

 ngOnInit()  {
   
  this.btnClass = `btn ${this.btnClass}`;
   
 }

  @Input() progreso: number= 0;
  @Input() btnClass: string = "btn-primary";

  @Output() valorSalida = new EventEmitter<number>();
  // @Input('valor') progreso: number= 10;
  
  // get getPorcentaje(){
  //   return `${this.progreso}%`;
  // }

  cambiarValor(valor:number){

    if(this.progreso >= 100 && this.progreso >= 0 ){
        this.valorSalida.emit(100);
        this.progreso = 100;
        return;
    }
    
    if(this.progreso <= 0 && this.progreso < 0 ){
        this.valorSalida.emit(0)        
        this.progreso = 0;
        return;
    }

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);    
  }

  onChange(nuevoValor:number){

    if(nuevoValor >= 100)
       this.progreso = 100
    else if(nuevoValor <= 0)
       this.progreso = 0;
    else
       this.progreso = nuevoValor;

    this.valorSalida.emit(this.progreso);
    // console.log(valor);
  }

}