import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-waning-modal',
  templateUrl: './waning-modal.component.html',
  styles: []
})
export class WaningModalComponent {

  @Output() public btnClick = new EventEmitter();
  @Input() public modalOpt1: string = '';
  @Input() public modalOpt2: string = '';
  @Input() public modalText: string = '';

  constructor() {
  }

  onClick() {
    this.btnClick.emit();
  }
}
