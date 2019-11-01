import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLinkService {
  getLinkImagem(){
    return['http://lorempixel.com/400/200/city']
  }
  getLink(){
    return['https://www.unip.br'];
  }
  constructor() { }
}
