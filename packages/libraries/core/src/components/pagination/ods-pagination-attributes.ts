import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsPaginationAttributes extends OdsComponentAttributes {
  /**
   * indicates if the pagination is entirely disabled.
   * it means no interactions (hover, click, focus, etc)
   */
  disabled: boolean;
  /**
   * Its corresponding default current page. If no current page, it will be this page selected by default.
   */
  defaultCurrent?: number;
  /**
   * Its corresponding current page.
   */
  current: number;
  /**
   * The total amount of pages
   */
  totalPages: number;
}
