import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  show: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  //Como bão retorna nada então coloca como void, isso é do typeScript
  showMessage(): void{
    //Faz uma inverção do valor de show
    this.show = !this.show; //toggle
  }

}
