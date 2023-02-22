import {Component} from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {RickAndMortyAPIService} from "../../services/rick-and-morty-api.service";

@Component({
  selector: 'app-characters-search',
  templateUrl: './characters-search.component.html',
  styleUrls: ['./characters-search.component.css']
})
export class CharactersSearchComponent {

  public characters: Character[] = [];
  characterLink: string = '/contenido/personajes/detalles/';

  constructor(private rickAndMortyAPIService: RickAndMortyAPIService) {
  }

  public searchCharacters(name: string): void {
    if (name.length === 0) {
      return;
    }
    this.rickAndMortyAPIService.getCharacters(`name=${name}`)
      .subscribe({
        next: (response) => {
          this.characters = response.results;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
