import {Component, OnInit} from '@angular/core';
import {RickAndMortyAPIService} from "../../services/rick-and-morty-api.service";
import {Router} from "@angular/router";
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  public characters: Character[] = [];
  characterLink: string = '/contenido/personajes/detalles/';

  constructor(private rickAndMortyAPIService: RickAndMortyAPIService,
              private router: Router) {
  }

  public getCharacters(): void {
    this.rickAndMortyAPIService.getCharacters().subscribe((response: any) => {
      this.characters = response;
    });
  }

  ngOnInit(): void {
    this.getCharacters();
  }
}
