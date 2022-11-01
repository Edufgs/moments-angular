import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  //Colocando estilos dinamicos
  size = 40;
  font = 'Arial'
  color = 'red'

  //Colocando nome de classe em um vetor
  classes= ['green-title', 'small-title']

  constructor() { }

  ngOnInit(): void {
  }

}
