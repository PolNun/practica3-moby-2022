import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CharactersListComponent} from "../characters/components/characters-list/characters-list.component";
import {CharactersSearchComponent} from "../characters/components/characters-search/characters-search.component";
import {CharacterComponent} from "../characters/components/character/character.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'personajes',
        children: [
          {path: 'listado', component: CharactersListComponent},
          {path: 'buscar', component: CharactersSearchComponent},
          {path: 'detalles/:id', component: CharacterComponent},
          {path: '**', redirectTo: 'listado'}
        ]
      },
      {
        path: 'episodios',
        children: [
          {path: 'listado', component: CharactersListComponent},
          {path: 'buscar', component: CharactersSearchComponent},
          {path: 'detalles/:id', component: CharacterComponent},
          {path: '**', redirectTo: 'listado'}
        ]
      },
      {
        path: 'ubicaciones',
        children: [
          {path: 'listado', component: CharactersListComponent},
          {path: 'buscar', component: CharactersSearchComponent},
          {path: 'detalles/:id', component: CharacterComponent},
          {path: '**', redirectTo: 'listado'}
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {
}
