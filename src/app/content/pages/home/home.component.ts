import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NavbarContentInterface} from "../../../shared/interfaces/navbar-content.interface";
import {NavbarContent} from "../../../shared/models/NavbarContent";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public navbarContent!: NavbarContentInterface;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loadNavbarContent();
  }

  private loadNavbarContent() {
    const keywordFromUrl = this.router.url.split('/')[2];
    this.navbarContent = NavbarContent.content.get(keywordFromUrl)!;
  }
}
