import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersListComponent} from "./components/characters-list/characters-list.component";
import {CharactersSearchComponent} from "./components/characters-search/characters-search.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'listado', component: CharactersListComponent},
      {path: 'buscar', component: CharactersSearchComponent},
      {path: ':id', component: CharactersListComponent},
      {path: '**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {
}
