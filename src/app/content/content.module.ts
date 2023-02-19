import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentRoutingModule} from './content-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {SharedModule} from "../shared/shared.module";
import {CardTemplateComponent} from './components/card-template/card-template.component';
import {DetailsTemplateComponent} from './components/details-template/details-template.component';
import {EpisodeComponent} from './episodes/episode/episode.component';
import {EpisodesSearchComponent} from './episodes/episodes-search/episodes-search.component';
import {EpisodesListComponent} from './episodes/episodes-list/episodes-list.component';
import {LocationsListComponent} from './locations/locations-list/locations-list.component';
import {LocationsSearchComponent} from './locations/locations-search/locations-search.component';
import {LocationComponent} from './locations/location/location.component';
import {CharactersListComponent} from './characters/characters-list/characters-list.component';
import {CharacterComponent} from './characters/character/character.component';
import {CharactersSearchComponent} from './characters/characters-search/characters-search.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardTemplateComponent,
    DetailsTemplateComponent,
    EpisodeComponent,
    EpisodesSearchComponent,
    EpisodesListComponent,
    LocationsListComponent,
    LocationsSearchComponent,
    LocationComponent,
    CharactersListComponent,
    CharacterComponent,
    CharactersSearchComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule
  ]
})
export class ContentModule {
}
