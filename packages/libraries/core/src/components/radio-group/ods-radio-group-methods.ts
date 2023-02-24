import { OdsComponentMethods } from '../ods-component-methods';
import { OdsRadio } from '../radio/ods-radio';

export interface OdsRadioGroupMethods extends OdsComponentMethods {
  getRadios<Radio extends OdsRadio>(): (HTMLElement & Radio)[];

  /**
   * called when a radio component is instanced
   * @internal
   * @param radio - html component element
   */
  registerRadio<Radio extends OdsRadio>(radio: HTMLElement & Radio): void;

  /**
   * called when a radio component is destroyed
   * @internal
   * @param radio - html component element
   */
  unregisterRadio<Radio extends OdsRadio>(radio: HTMLElement & Radio): void;

  /**
   * @internal
   * @param newValue - new value
   * @param checked - checked or not
   * @param checking - checking or not
   */
  updateState({ newValue, checked, checking }: { newValue: string, checked: boolean, checking: boolean }): void;
}
