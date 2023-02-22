import {Component, OnInit} from '@angular/core';
import {RickAndMortyAPIService} from "../../services/rick-and-morty-api.service";
import {Router} from "@angular/router";
import {Character, CharactersInfo} from "../../interfaces/character.interface";
import {Info} from "../../interfaces/pagination-info.interface";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  public characters: Character[] = [];

  public info!: Info;

  constructor(private rickAndMortyAPIService: RickAndMortyAPIService,
              private router: Router) {
  }

  public getCharacters(): void {
    this.rickAndMortyAPIService.getCharacters()
      .subscribe({
        next: (response: CharactersInfo) => {
          this.characters = response.results;
          this.info = response.info;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  changePage($event: string | null) {
    if (!$event) return;
    this.rickAndMortyAPIService.getCharacters(`page=${$event}`)
      .subscribe({
        next: (response: CharactersInfo) => {
          this.characters = response.results;
          this.info = response.info;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
