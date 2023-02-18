import {Component, Output} from '@angular/core';
import {Navbar} from "../../../shared/interfaces/navbar.interface";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent {
  // public navbarData: Navbar = {
  //   contentTitle: 'personajes',
  //   contentListing: 'listado de personajes',
  //   contentListingLink: '/personajes/listado',
  //   contentSearching: 'buscar personajes',
  //   contentSearchingLink: '/personajes/buscar'
  // };

  constructor() {
  }


}
