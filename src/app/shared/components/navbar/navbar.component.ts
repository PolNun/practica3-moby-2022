import {Component, Input} from '@angular/core';
import {User} from "../../../auth/interfaces/auth-api-response.interface";
import {Router} from "@angular/router";
import {AuthApiService} from "../../../auth/services/auth-api.service";
import {LinksBody} from "../../../content/interfaces/navbar-content.interface";
import {NavbarContent} from "../../models/NavbarContent";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() public contentListingLink: string = '/listado';
  @Input() public contentSearchingLink: string = '/buscar';
  @Input() public contentTitle: string = 'Angular';
  @Input() public dropdownLinks: LinksBody[] = [];
  public get auth(): User {
    return this.authApiService.auth!;
  }

  constructor(private router: Router,
              private authApiService: AuthApiService) {
  }

  public logout() {
    this.authApiService.logout();
  }

  updateNavbar(link: string) {
    this.contentListingLink = NavbarContent.content.get(link)!.contentListingLink;
    this.contentSearchingLink = NavbarContent.content.get(link)!.contentSearchingLink;
    this.contentTitle = NavbarContent.content.get(link)!.contentTitle;
    this.dropdownLinks = NavbarContent.content.get(link)!.dropdownLinks;
  }
}
