import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {Character} from "../../interfaces/character.interface";
import {RickAndMortyAPIService} from "../../services/rick-and-morty-api.service";
import {Episode} from "../../interfaces/episode.interface";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character!: Character;
  episode!: Episode;

  mapGender = {
    'Male': 'Masculino',
    'Female': 'Femenino',
    'Genderless': 'Sin género',
    'unknown': 'Desconocido'
  }

  constructor(private rickAndMortyAPIService: RickAndMortyAPIService,
              private activatedRoute: ActivatedRoute) {
  }

  getCharacter(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.rickAndMortyAPIService.getCharacterById(id))
      )
      .subscribe({
        next: (character: Character) => {
          this.character = character;
          if (character.id <= 51) this.getEpisode();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  getEpisode(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.rickAndMortyAPIService.getEpisodeById(id))
      )
      .subscribe({
        next: (episode: Episode) => {
          this.episode = episode;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  ngOnInit(): void {
    this.getCharacter();
  }
}
