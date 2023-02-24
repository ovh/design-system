import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsCartManagerMethods extends OdsComponentMethods {
  /**
   * get the number of item flagged as product
   * @see OdsCartManagerItem.product
   */
  getProductQuantity() : number;

  /**
   * get the total amount of the cart
   * @param vat - include or not the Taxes
   */
  getTotalAmount(vat: boolean): number;
}
