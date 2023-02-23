import {Component, OnInit} from '@angular/core';
import {PaginationInfo} from "../../interfaces/pagination-info.interface";
import {Router} from "@angular/router";
import {LocationsApiService} from "../../services/locations-api.service";
import {LocationRickAndMorty, LocationsInfo} from "../../interfaces/location.interface";

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
  public locations: LocationRickAndMorty[] = [];
  public info!: PaginationInfo;

  constructor(private locationsApiService: LocationsApiService,
              private router: Router) {
  }

  public getLocations(): void {
    this.locationsApiService.getLocations()
      .subscribe({
        next: (response: LocationsInfo) => {
          this.locations = response.results;
          this.info = response.info;
        }
      });
  }

  ngOnInit(): void {
    this.getLocations();
  }

  changePage($event: string | null) {
    if (!$event) return;
    this.locationsApiService.getLocations(`page=${$event}`)
      .subscribe({
        next: (response) => {
          this.locations = response.results;
          this.info = response.info;
        }
      });
  }
}
