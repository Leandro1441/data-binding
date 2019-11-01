
import { Component, OnInit } from '@angular/core';

import { DataLinkService } from './data-link.service';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  
  url;
  urlImagem;
  cursoAngular:boolean= true;
  valorAtual='';
  valorSalvo;
  nome:string ="abc";
  mouse:boolean=false;
  
  pessoa: any ={
    nome:'def',
    idade:20
  }
  
  getValor(){
    return 1;
  }
  getCurtirCurso(){
    if(this.cursoAngular)
    return "curtindo";
    else
    return "não curtindo"
  }
  botaoClicado(){
    alert("Botao clicado")
  }
  onKeyUp(evento:KeyboardEvent){
    this.valorAtual=(<HTMLInputElement>evento.target).value;
    
  }
  constructor(DataLinkService:DataLinkService) { 
    this.urlImagem=DataLinkService.getLinkImagem();
    this.url=DataLinkService.getLink();
  }
  salvarValor(valor){
    this.valorSalvo=valor;
  }
  onMouseOverOut(){
    this.mouse=!this.mouse;
  }

  ngOnInit() {
  }

}
