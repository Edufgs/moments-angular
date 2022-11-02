import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

//Impot o service que será usado
import { ListService } from 'src/app/services/list.service';
 
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  //Foi adicionado a interface
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 5},
    {name: "Bob", type: "horse", age: 8},
  ]

  animalDetails = ''
  
  constructor(
    //Inicia o service igual no "Nestjs"
    private listService: ListService
  ){}

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal){
    this.animals =  this.listService.remove(this.animals, animal)
  }

}
