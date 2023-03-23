import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsPaginationMethods extends OdsComponentMethods {
  /**
   * set page index on the component
   */
  setPageIndex(value: number): void;
}
