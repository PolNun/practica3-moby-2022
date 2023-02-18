import {Component} from '@angular/core';
import {Navbar} from "../../../shared/interfaces/navbar.interface";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  public navbarData: Navbar = {
    contentTitle: 'personajes',
    contentListing: 'listado de personajes',
    contentListingLink: '/personajes/listado',
    contentSearching: 'buscar personajes',
    contentSearchingLink: '/personajes/buscar'
  };

  constructor() {
  }
}
