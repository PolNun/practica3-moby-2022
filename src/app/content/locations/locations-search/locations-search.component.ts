import {Component} from '@angular/core';
import {LocationRickAndMorty} from "../../interfaces/location.interface";
import {LocationsApiService} from "../../services/locations-api.service";

@Component({
  selector: 'app-locations-search',
  templateUrl: './locations-search.component.html',
  styleUrls: ['./locations-search.component.css']
})
export class LocationsSearchComponent {
  public locations: LocationRickAndMorty[] = [];
  public errorMessage: string = '';

  constructor(private locationsApiService: LocationsApiService) {
  }

  public searchLocations(name: string): void {
    if (name.length === 0) return;

    this.locationsApiService.getLocations(`name=${name}`)
      .subscribe({
        next: (response) => {
          this.locations = response.results;
        },
        error: () => {
          this.locations = [];
          this.errorMessage = "No se encontraron ubicaciones.";
        }
      });
  }
}
