import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent {
  @Input() public cardImgAlt: string = '';
  @Input() public cardImgTitle: string = '';
  @Input() public cardText: string = '';
  @Input() public cardImgSrc: string = '';
  @Input() public isHidden: string = '';
  @Input() public detailsLink: string = '';
  @Output() cardClick = new EventEmitter();

  constructor() {
  }

  onClick() {
    this.cardClick.emit();
  }
}
