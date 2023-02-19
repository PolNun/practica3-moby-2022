import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentRoutingModule} from './content-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {SharedModule} from "../shared/shared.module";
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { DetailsTemplateComponent } from './components/details-template/details-template.component';
import { WaningModalComponent } from './components/waning-modal/waning-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardTemplateComponent,
    DetailsTemplateComponent,
    WaningModalComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule
  ]
})
export class ContentModule {
}
