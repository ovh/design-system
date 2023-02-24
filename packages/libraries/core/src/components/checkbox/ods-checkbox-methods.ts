import { OdsComponentMethods } from '../ods-component-methods';

/**
 * public methods of checkbox component.
 * internal method to implement are in `OdsCheckboxBehavior`
 * @see OdsCheckboxBehavior
 */
export interface OdsCheckboxMethods extends OdsComponentMethods {

  /**
   * set the tab index.
   * this method has to call OdsCheckboxController.setTabindex
   * @public
   * @see OdsCheckboxController.setTabindex
   */
  setTabindex(index: number): void;

  /**
   * programmatically set the focus on the checkbox.
   * this method has to call OdsCheckboxController.setFocus
   * @public
   * @see OdsCheckboxController.setFocus
   */
  setFocus(): void;
}
