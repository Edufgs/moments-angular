import { Component, OnInit } from '@angular/core';

/**
 * @Component= Configuraçãp do componente.
 */
@Component({
  selector: 'app-first-component', //Usado para importar o componente.
  templateUrl: './first-component.component.html', //Caminho para o template html
  styleUrls: ['./first-component.component.scss'] //O arquivo de css do componente
})
export class FirstComponentComponent implements OnInit {

  //Não precisa colcocar uma denominação da variavel como var, let ou const.
  name = 'Eduardo'
  age = 22
  job = 'Progamador'

  constructor() { }

  ngOnInit(): void {
  }

}
