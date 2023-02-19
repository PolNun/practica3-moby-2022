import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CardTemplateComponent} from './components/card-template/card-template.component';
import {DetailsTemplateComponent} from './components/details-template/details-template.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {WaningModalComponent} from "./components/waning-modal/waning-modal.component";


@NgModule({
  declarations: [
    NavbarComponent,
    CardTemplateComponent,
    DetailsTemplateComponent,
    WaningModalComponent
  ],
  exports: [
    NavbarComponent,
    CardTemplateComponent,
    DetailsTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ]
})
export class SharedModule { }
