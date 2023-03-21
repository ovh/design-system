import { OdsComponentMethods } from '../../ods-component-methods';

export interface OdsPaginationMethods extends OdsComponentMethods {
  /**
   * focus the element
   */
  setFocus(): void;

  /**
   * set page index on the component
   */
  setPageIndex(value: number): void;
}
