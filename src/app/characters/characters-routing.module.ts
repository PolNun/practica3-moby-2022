import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersListComponent} from "./components/characters-list/characters-list.component";
import {CharactersSearchComponent} from "./components/characters-search/characters-search.component";
import {CharacterComponent} from "./components/character/character.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'listado', component: CharactersListComponent},
      {path: 'buscar', component: CharactersSearchComponent},
      {path: 'detalles/:id', component: CharacterComponent},
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
