import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsPaginationAttributes extends OdsComponentAttributes {
  /**
   * indicates if the select is entirely disabled.
   * it means no interactions (hover, click, focus, etc)
   */
  disabled: boolean;
  /**
   * Its corresponding default current page. If no current page, it will be this page selected by default.
   */
  defaultCurrent?: any;
  /**
   * Its corresponding current page.
   */
  current: any;
  /**
   * The total amount of pages
   */
  totalPages: any;
}
