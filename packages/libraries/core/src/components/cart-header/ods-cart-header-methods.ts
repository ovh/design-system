import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsCartHeaderMethods extends OdsComponentMethods {
  /**
   * Render manually the cart header in order to refresh the component.
   */
  refresh() : void;
}
