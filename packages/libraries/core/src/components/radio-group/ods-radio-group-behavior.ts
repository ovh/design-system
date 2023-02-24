import { OdsRadio } from './../radio/ods-radio';

export interface OdsRadioGroupBehavior {
  /**
   * 
   */
  el: HTMLElement;

  /**
   * 
   */
  radios: (HTMLElement & OdsRadio)[];

  /**
   * 
   */
  inputId: string;

  /**
   * 
   * @param value 
   * @param previousValue 
   */
  emitChange(value: string, previousValue: string): void;

  /**
   * 
   * @param disabled 
   */
  emitDisabled(disabled: boolean): void;

  /**
   * 
   */
  onDestroy(): void;
}
