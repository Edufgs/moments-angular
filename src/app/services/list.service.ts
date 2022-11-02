import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

//Faz com que a requisição ocorra da melhor maneira possivel
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals'

  constructor(
    //Iniciando para fazer requisição http
    private http: HttpClient
  ) {}

  remove(animals: Animal[], animal: Animal){
    //Retorna todos os animais menos oq vc quer remover
    return animals.filter((a) => animal.name !== a.name)
  }

  //O Observable observa se ocorre de uma maneira correta, se está recebendo certo
  getAll(): Observable<Animal[]>{
    //Faz uma requisição http e ainda diz oq vai receber
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
