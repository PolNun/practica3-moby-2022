import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardTemplateComponent,
    PaginationComponent
  ],
  exports: [
    NavbarComponent,
    CardTemplateComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ]
})
export class SharedModule { }
