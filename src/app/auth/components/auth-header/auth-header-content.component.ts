import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-authheader-content',
  templateUrl: './authheader-content.component.html',
  styleUrls: []
})
export class AuthHeaderContent implements OnInit {
  headerImageURL: string = 'assets/rick-morty-portal.png';
  ngOnInit(): void {
    if (window.location.pathname === '/autenticacion/registro') {
      this.headerImageURL = 'assets/rick-morty-empty-portal.png';
    }
  }

}
