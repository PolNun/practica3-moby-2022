import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NavbarContent} from "../../interfaces/navbar-content.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  public navbarContent!: NavbarContent;

  public navbarContentCharacters: NavbarContent = {
    contentTitle: "personajes",
    contentListingLink: "/contenido/personajes/listado",
    contentSearchingLink: "/contenido/personajes/buscar",
    dropdownLinks: [
      {link: "/contenido/episodios/listado", text: "episodios"},
      {link: "/contenido/ubicaciones/listado", text: "ubicaciones"}
    ]
  }

  public navbarContentEpisodes: NavbarContent = {
    contentTitle: "episodios",
    contentListingLink: "/contenido/episodios/listado",
    contentSearchingLink: "/contenido/episodios/buscar",
    dropdownLinks: [
      {link: "/contenido/personajes/listado", text: "personajes"},
      {link: "/contenido/ubicaciones/listado", text: "ubicaciones"}
    ]
  }

  public navbarContentLocations: NavbarContent = {
    contentTitle: "ubicaciones",
    contentListingLink: "/contenido/ubicaciones/listado",
    contentSearchingLink: "/contenido/ubicaciones/buscar",
    dropdownLinks: [
      {link: "/contenido/personajes/listado", text: "personajes"},
      {link: "/contenido/episodios/listado", text: "episodios"}
    ]
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.router.url.includes("personajes")) {
      this.navbarContent = this.navbarContentCharacters;
    } else if (this.router.url.includes("episodios")) {
      this.navbarContent = this.navbarContentEpisodes;
    } else if (this.router.url.includes("ubicaciones")) {
      this.navbarContent = this.navbarContentLocations;
    } else {
      this.navbarContent = this.navbarContentCharacters;
    }
  }

}
