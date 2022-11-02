import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    //Retorna todos os animais menos oq vc quer remover
    return animals.filter((a) => animal.name !== a.name)
  }
}
