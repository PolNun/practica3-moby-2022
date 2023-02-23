import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent {
  @Input() public cardImgAlt: string = '';
  @Input() public cardImgTitle: string = '';
  @Input() public cardImgClasses: string[] = ['card-img-top'];
  @Input() public cardTitle: string = '';
  @Input() public cardImgSrc: string = '';
  @Input() cardText: string = '';
  @Input() cardDesc1: string = '';
  @Input() cardDesc2: string = '';
  @Output() cardClick = new EventEmitter();

  constructor() {
  }

  onClick() {
    this.cardClick.emit();
  }
}
