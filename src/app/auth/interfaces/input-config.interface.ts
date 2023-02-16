export interface InputConfig {
  labelText: string;
  inputType: string;
  placeholderText: string;
  name: string;
  alertText: string;
  isRequired: boolean;
  regExpPattern: RegExp | string;
}
