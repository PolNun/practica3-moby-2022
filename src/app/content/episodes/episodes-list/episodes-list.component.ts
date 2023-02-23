import {Component, OnInit} from '@angular/core';
import {PaginationInfo} from "../../interfaces/pagination-info.interface";
import {Router} from "@angular/router";
import {Episode, EpisodesInfo} from "../../interfaces/episode.interface";
import {EpisodesApiService} from "../../services/episodes-api.service";

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  public episodes: Episode[] = [];
  public info!: PaginationInfo;

  constructor(private episodesApiService: EpisodesApiService,
              private router: Router) {
  }

  public getEpisodes(): void {
    this.episodesApiService.getEpisodes()
      .subscribe({
        next: (response: EpisodesInfo) => {
          this.episodes = response.results;
          this.info = response.info;
        }
      });
  }

  ngOnInit(): void {
    this.getEpisodes();
  }

  changePage($event: string | null) {
    if (!$event) return;
    this.episodesApiService.getEpisodes(`page=${$event}`)
      .subscribe({
        next: (response: EpisodesInfo) => {
          this.episodes = response.results;
          this.info = response.info;
        }
      });
  }
}
