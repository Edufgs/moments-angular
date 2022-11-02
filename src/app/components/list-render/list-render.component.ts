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
  animals: Animal[] = []

  animalDetails = ''
  
  constructor(
    //Inicia o service igual no "Nestjs"
    private listService: ListService
  ){
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal){
    this.animals =  this.listService.remove(this.animals, animal)
  }
  
  getAnimals(): void{
    //.subscribe diz sobre o observable que o evento foi concretizado
    //Nesse mesmo subscribe já guarda na variavel
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
