import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
    //Adiciona na variavel um numero random de até 100
    this.myNumber = Math.floor(Math.random() * 100)
  }

}
