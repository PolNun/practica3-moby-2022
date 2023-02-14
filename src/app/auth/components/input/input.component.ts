import {Component, Input} from '@angular/core';
import {InputConfig} from "../../interfaces/input-config.interface";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  public labelText: string = 'Input label';
  public inputType: string = 'text';
  public placeholderText: string = '';
  public alertText: string = '';
  public isRequired: boolean = false;
  public regExpPattern: RegExp | null = null;
  public id: string = `input${Math.random()}`;

  @Input() public inputConfig: InputConfig = {
    labelText: this.labelText,
    inputType: this.inputType,
    placeholderText: this.placeholderText,
    alertText: this.alertText,
    isRequired: this.isRequired,
    regExpPattern: this.regExpPattern
  }

  constructor() {
  }
}
