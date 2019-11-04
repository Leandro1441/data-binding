import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number;
  @Output() mudouValor=new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor:this.valor})
  }
  decrementa(){
    if(this.valor>0)
    this.valor--;
    this.mudouValor.emit({novoValor:this.valor})
  }
  decrementaDez(){
    if(this.valor<10)
    this.valor=0
    else if(this.valor>=10){
      this.valor=this.valor-10;
    }
    this.mudouValor.emit({novoValor:this.valor})
  }
  incrementaDez(){
    this.valor=this.valor+10;
    this.mudouValor.emit({novoValor:this.valor})
  }
  constructor() { }

  ngOnInit() {
  }

}
