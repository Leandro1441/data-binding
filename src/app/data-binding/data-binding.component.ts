
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

  getValor(){
    return 1;
  }
  getCurtirCurso(){
    if(this.cursoAngular)
    return "curtindo";
    else
    return "não curtindo"
  }
  constructor(DataLinkService:DataLinkService) { 
    this.urlImagem=DataLinkService.getLinkImagem();
    this.url=DataLinkService.getLink();
  }

  ngOnInit() {
  }

}
