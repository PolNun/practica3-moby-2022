import {Component} from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {CharactersApiService} from "../../services/characters-api.service";

@Component({
  selector: 'app-characters-search',
  templateUrl: './characters-search.component.html',
  styleUrls: ['./characters-search.component.css']
})
export class CharactersSearchComponent {

  public characters: Character[] = [];
  public errorMessage: string = '';

  constructor(private rickAndMortyAPIService: CharactersApiService) {
  }

  public searchCharacters(name: string): void {
    if (name.length === 0) return;

    this.rickAndMortyAPIService.getCharacters(`name=${name}`)
      .subscribe({
        next: (response) => {
          this.characters = response.results;
        },
        error: () => {
          this.characters = [];
          this.errorMessage = "No se encontraron personajes.";
        }
      });
  }
}
