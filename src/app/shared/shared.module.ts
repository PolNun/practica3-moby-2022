import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { DetailsTemplateComponent } from './components/details-template/details-template.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardTemplateComponent,
    DetailsTemplateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
