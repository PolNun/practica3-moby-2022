import {Component, OnInit} from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {CharactersApiService} from "../../services/characters-api.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {LocationRickAndMorty} from "../../interfaces/location.interface";
import {LocationsApiService} from "../../services/locations-api.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: []
})
export class LocationComponent implements OnInit {
  location!: LocationRickAndMorty;
  character!: Character;
  characters: Character[] = [];

  constructor(private charactersApiService: CharactersApiService,
              private locationsApiService: LocationsApiService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.locationsApiService.getLocationById(id))
      )
      .subscribe({
        next: (location: LocationRickAndMorty) => {
          this.location = location;
          this.getAllCharactersOnLocation();
        }
      });
  }

  getAllCharactersOnLocation(): void {
    this.location.residents.forEach((residentUrl: string) => {
      this.charactersApiService.getCharacterById(this.getCharacterIdByUrl(residentUrl))
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
