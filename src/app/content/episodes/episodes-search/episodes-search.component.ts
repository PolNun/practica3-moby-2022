import {Component} from '@angular/core';
import {Episode} from "../../interfaces/episode.interface";
import {EpisodesApiService} from "../../services/episodes-api.service";

@Component({
  selector: 'app-episodes-search',
  templateUrl: './episodes-search.component.html',
  styleUrls: ['./episodes-search.component.css']
})
export class EpisodesSearchComponent {
  public episodes: Episode[] = [];
  public errorMessage: string = '';

  constructor(private episodesApiService: EpisodesApiService) {
  }

  public searchEpisodes(name: string): void {
    if (name.length === 0) {
      return;
    }
    this.episodesApiService.getEpisodes(`name=${name}`)
      .subscribe({
        next: (response) => {
          this.episodes = response.results;
        },
        error: () => {
          this.episodes = [];
          this.errorMessage = "No se encontraron episodios.";
        }
      });
  }
}
