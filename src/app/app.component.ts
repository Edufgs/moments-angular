import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName= 'Eduardo Compartilhado'

  userData = {
    email: 'eduardo.email@email.com',
    role: 'Admin',
  }

  title = 'moments';
}
