import { Component, OnInit } from '@angular/core';

import { DataNumerosService } from './data-numeros.service';
@Component({
  selector: 'app-data-numeros',
  templateUrl: './data-numeros.component.html',
  styleUrls: ['./data-numeros.component.scss']
})
export class DataNumerosComponent implements OnInit {

  numeros: number[];

  constructor(DataNumerosService:DataNumerosService) { 
    this.numeros=DataNumerosService.getNumeros();
  }
  
  ngOnInit() {
  }

}
