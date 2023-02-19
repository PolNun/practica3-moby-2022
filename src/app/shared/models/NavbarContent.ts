import {NavbarContentInterface} from "../../content/interfaces/navbar-content.interface";
// Esta clase sirve el contenido estático de la barra de navegación
export class NavbarContent {

  private static navbarContentCharacters: NavbarContentInterface = {
    contentTitle: "personajes",
    contentListingLink: "/contenido/personajes/listado",
    contentSearchingLink: "/contenido/personajes/buscar",
    dropdownLinks: [
      {link: "/contenido/episodios/listado", text: "episodios"},
      {link: "/contenido/ubicaciones/listado", text: "ubicaciones"}
    ]
  }

  private static navbarContentEpisodes: NavbarContentInterface = {
    contentTitle: "episodios",
    contentListingLink: "/contenido/episodios/listado",
    contentSearchingLink: "/contenido/episodios/buscar",
    dropdownLinks: [
      {link: "/contenido/personajes/listado", text: "personajes"},
      {link: "/contenido/ubicaciones/listado", text: "ubicaciones"}
    ]
  }

  private static navbarContentLocations: NavbarContentInterface = {
    contentTitle: "ubicaciones",
    contentListingLink: "/contenido/ubicaciones/listado",
    contentSearchingLink: "/contenido/ubicaciones/buscar",
    dropdownLinks: [
      {link: "/contenido/personajes/listado", text: "personajes"},
      {link: "/contenido/episodios/listado", text: "episodios"}
    ]
  }
  public static readonly content: Map<string, NavbarContentInterface> = new Map([
    ["personajes", this.navbarContentCharacters],
    ["episodios", this.navbarContentEpisodes],
    ["ubicaciones", this.navbarContentLocations]
  ]);
}
