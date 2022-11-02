/**
 * Output = envia algo para outro componente
 * EventEmitter = emite um evento para outro componente
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {
  //Criou um emitter de evento
  @Output() chageNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    //Agora está envidando o evento para qualquer lugar.
    this.chageNumber.emit();
  }

}
