import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

//Aqui fica a configuração de todos as rotas
const routes: Routes = [
  //'' = Significa rota principal e tem que dizar o componente que vai rederizar
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
