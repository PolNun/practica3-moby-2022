import {Component} from '@angular/core';
import {Navbar} from "../../../shared/interfaces/navbar.interface";

@Component({
  selector: 'app-characters-search',
  templateUrl: './characters-search.component.html',
  styleUrls: ['./characters-search.component.css']
})
export class CharactersSearchComponent {

  public navbarData: Navbar = {
    contentTitle: 'personajes',
    contentListing: 'listado de personajes',
    contentListingLink: '/personajes/listado',
    contentSearching: 'buscar personajes',
    contentSearchingLink: '/personajes/buscar'
  };

}
