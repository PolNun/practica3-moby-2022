export interface InputConfig {
  labelText: string;
  inputType: string;
  placeholderText: string;
  alertText: string;
  isRequired: boolean;
  regExpPattern: RegExp | null;
}
