import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataNumerosService {
  getNumeros(){
    return[80808080,50505050,20202021];
  }
  getPAlavra(){
    return
  }
  constructor() { }
}
