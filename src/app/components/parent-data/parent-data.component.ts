import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {
  //Esse @Input é um decorator para receber paramentros de outros componentes.
  //É preciso iniciar essa variavel para o angular aceitar;
  @Input() name: string = ""; 

  //Essa ! na frente da variavel é para dizer que essa variavel foi iniciado.
  @Input() userData!: {
    email: string,
    role: string
  }

  constructor() { }

  ngOnInit(): void {
  }

}
