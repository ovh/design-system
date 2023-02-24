import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsCartMethods extends OdsComponentMethods {
  /**
   * get the number of cart items detected in the DOM
   */
  getItemQuantity(): number;

  /**
   * Render manually the cart in order to refresh the component.
   */
  refresh(): void;
}
