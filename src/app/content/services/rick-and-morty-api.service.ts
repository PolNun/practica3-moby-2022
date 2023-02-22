import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Character, CharactersInfo} from "../interfaces/character.interface";
import {Episode} from "../interfaces/episode.interface";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyAPIService {
  private readonly BASE_URL: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {
  }

  getCharacters(query?: string): Observable<CharactersInfo> {
    if (!query) {
      return this.http.get<CharactersInfo>(`${this.BASE_URL}/character`);
    }
    return this.http.get<CharactersInfo>(`${this.BASE_URL}/character?${query}`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.BASE_URL}/character/${id}`);
  }

  getEpisodes(query?: string): Observable<any> {
    if (!query) {
      return this.http.get(`${this.BASE_URL}/episode`)
        .pipe(
          map((response: any) => {
            return response.results;
          })
        );
    }
    return this.http.get(`${this.BASE_URL}/episode?name=${query}`)
      .pipe(
        map((response: any) => {
          return response.results;
        })
      );
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.BASE_URL}/episode/${id}`);
  }

  getLocations(query?: string): Observable<any> {
    if (!query) {
      return this.http.get(`${this.BASE_URL}/location`)
        .pipe(
          map((response: any) => {
            return response.results;
          })
        );
    }
    return this.http.get(`${this.BASE_URL}/location?name=${query}`)
      .pipe(
        map((response: any) => {
          return response.results;
        })
      );
  }

  getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.BASE_URL}/location/${id}`);
  }
}
