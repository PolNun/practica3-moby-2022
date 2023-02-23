import {Component, OnInit} from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {Episode} from "../../interfaces/episode.interface";
import {CharactersApiService} from "../../services/characters-api.service";
import {EpisodesApiService} from "../../services/episodes-api.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  episode!: Episode;
  character!: Character;
  characters: Character[] = [];

  constructor(private charactersApiService: CharactersApiService,
              private episodesApiService: EpisodesApiService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getEpisode();
  }

  getEpisode(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.episodesApiService.getEpisodeById(id))
      )
      .subscribe({
        next: (episode: Episode) => {
          this.episode = episode;
          this.getAllCharactersOnEpisode();
        }
      });
  }

  getAllCharactersOnEpisode(): void {
    this.episode.characters.forEach((characterUrl: string) => {
      this.charactersApiService.getCharacterById(this.getCharacterIdByUrl(characterUrl))
        .subscribe({
          next: (character: Character) => {
            this.characters.push(character);
          }
        });
    });
  }

  getCharacterIdByUrl(characterUrl: string): number {
    return parseInt(characterUrl.split('/')[5]);
  }
}
