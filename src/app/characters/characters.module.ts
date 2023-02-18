import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CharactersRoutingModule} from './characters-routing.module';
import {CharactersListComponent} from './components/characters-list/characters-list.component';
import {CharactersSearchComponent} from './components/characters-search/characters-search.component';
import {CharacterComponent} from './components/character/character.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CharactersListComponent,
    CharactersSearchComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
