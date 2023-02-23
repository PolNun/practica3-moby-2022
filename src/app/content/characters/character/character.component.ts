import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {Character} from "../../interfaces/character.interface";
import {CharactersApiService} from "../../services/characters-api.service";
import {Episode} from "../../interfaces/episode.interface";
import {EpisodesApiService} from "../../services/episodes-api.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character!: Character;
  episode!: Episode;
  episodes: Episode[] = [];

  mapGender = {
    'Male': 'Masculino',
    'Female': 'Femenino',
    'Genderless': 'Sin género',
    'unknown': 'Desconocido'
  }

  constructor(private charactersApiService: CharactersApiService,
              private episodesApiService: EpisodesApiService,
              private activatedRoute: ActivatedRoute) {
  }

  getCharacter(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.charactersApiService.getCharacterById(id))
      )
      .subscribe({
        next: (character: Character) => {
          this.character = character;
          if (character.id <= 51) this.getEpisode();
          this.getAllEpisodesOnCharacter();
        }
      });
  }

  getEpisode(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.episodesApiService.getEpisodeById(id))
      )
      .subscribe({
        next: (episode: Episode) => {
          this.episode = episode;
        }
      });
  }

  getEpisodeIdByUrl(episodeUrl: string): number {
    return parseInt(episodeUrl.split('/')[5]);
  }

  private getAllEpisodesOnCharacter(): void {
    this.character.episode.forEach((episodeUrl: string) => {
      this.episodesApiService.getEpisodeById(this.getEpisodeIdByUrl(episodeUrl))
        .subscribe({
          next: (episode: Episode) => {
            this.episodes.push(episode);
          }
        });
    });
  }

  ngOnInit(): void {
    this.getCharacter();
  }

}
