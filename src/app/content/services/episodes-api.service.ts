import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Episode, EpisodesInfo} from "../interfaces/episode.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EpisodesApiService {
  private readonly BASE_URL: string = environment.rickAndMortyApi.baseUrl;

  constructor(private http: HttpClient) {
  }

  getEpisodes(query?: string): Observable<EpisodesInfo> {
    if (!query) {
      return this.http.get<EpisodesInfo>(`${this.BASE_URL}/episode`);
    }
    return this.http.get<EpisodesInfo>(`${this.BASE_URL}/episode?name=${query}`);
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.BASE_URL}/episode/${id}`);
  }
}
