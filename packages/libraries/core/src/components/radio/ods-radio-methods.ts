import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsRadioMethods extends OdsComponentMethods {
  /**
   * Set the tab index.
   * useful between radio-group and radio
   * @internal
   * @param value - index
   */
  setButtonTabindex(value: number): void;

  /**
   * set the focus.
   * useful between radio-group and radio
   * @internal
   */
  setFocus(): void;

  /**
   * update the state according to the different attributes (checking, checked, etc).
   * useful between radio-group and radio
   * @internal
   * @param checking
   */
  updateState(checking?: boolean): void;
}
