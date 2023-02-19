import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EpisodesListComponent} from "./episodes/episodes-list/episodes-list.component";
import {EpisodesSearchComponent} from "./episodes/episodes-search/episodes-search.component";
import {EpisodeComponent} from "./episodes/episode/episode.component";
import {LocationsListComponent} from "./locations/locations-list/locations-list.component";
import {LocationsSearchComponent} from "./locations/locations-search/locations-search.component";
import {LocationComponent} from "./locations/location/location.component";
import {CharactersListComponent} from "./characters/characters-list/characters-list.component";
import {CharactersSearchComponent} from "./characters/characters-search/characters-search.component";
import {CharacterComponent} from "./characters/character/character.component";

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
          {path: 'listado', component: EpisodesListComponent},
          {path: 'buscar', component: EpisodesSearchComponent},
          {path: 'detalles/:id', component: EpisodeComponent},
          {path: '**', redirectTo: 'listado'}
        ]
      },
      {
        path: 'ubicaciones',
        children: [
          {path: 'listado', component: LocationsListComponent},
          {path: 'buscar', component: LocationsSearchComponent},
          {path: 'detalles/:id', component: LocationComponent},
          {path: '**', redirectTo: 'listado'}
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'contenido/personajes/listado'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {
}
