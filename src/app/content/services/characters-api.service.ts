import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character, CharactersInfo} from "../interfaces/character.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  private readonly BASE_URL: string = environment.rickAndMortyApi.baseUrl;

  constructor(private http: HttpClient) {
  }

  getCharacters(query?: string): Observable<CharactersInfo> {
    if (!query) {
      return this.http.get<CharactersInfo>(`${this.BASE_URL}/character`);
      // .pipe(
      //   map((charactersInfo: CharactersInfo) => {
      //       return {
      //         ...charactersInfo,
      //         results: charactersInfo.results.slice(0, 10)
      //       }
      //     }
      //   ));
    }
    return this.http.get<CharactersInfo>(`${this.BASE_URL}/character?${query}`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.BASE_URL}/character/${id}`);
  }
}
