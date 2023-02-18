import {Component, Input} from '@angular/core';
import {User} from "../../../auth/interfaces/auth-api-response.interface";
import {Router} from "@angular/router";
import {AuthApiService} from "../../../auth/services/auth-api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() public contentListingLink: string = '/listado';
  @Input() public contentSearchingLink: string = '/buscar';
  @Input() public contentListingText: string = 'listado';
  @Input() public contentSearchingText: string = 'buscar';
  @Input() public contentTitle: string = 'Angular';

  // @Input() public navbarContent: Navbar = {
  // }

  public get auth(): User {
    return this.authApiService.auth!;
  }

  constructor(private router: Router,
              private authApiService: AuthApiService) {
  }

  public logout() {
    this.authApiService.logout();
  }
}
