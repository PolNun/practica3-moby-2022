import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {LocationRickAndMorty, LocationsInfo} from "../interfaces/location.interface";

@Injectable({
  providedIn: 'root'
})
export class LocationsApiService {

  private readonly BASE_URL: string = environment.rickAndMortyApi.baseUrl;

  constructor(private http: HttpClient) {
  }

  getLocations(query?: string): Observable<LocationsInfo> {
    if (!query) {
      return this.http.get<LocationsInfo>(`${this.BASE_URL}/location`);
    }
    return this.http.get<LocationsInfo>(`${this.BASE_URL}/location?${query}`);
  }

  getLocationById(id: number): Observable<LocationRickAndMorty> {
    return this.http.get<LocationRickAndMorty>(`${this.BASE_URL}/location/${id}`);
  }
}
