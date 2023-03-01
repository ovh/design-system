import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsPaginationSize } from './ods-pagination-size';
import { OdsPaginationArrowSize } from './ods-pagination-arrow-size';

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
  /** full width or not: see component principles */
  flex: boolean;
  /** size: see component principles */
  size: OdsPaginationSize;
  /** arrowSize: see component principles */
  arrowSize: OdsPaginationArrowSize;

  /*
   * color of the select input and his icon arrow.
   * color is not yet customizable trough his attribute.
   * for now, it is forced to primary color (internally)
   * @experimental
   */
  /** the primary color of the theme */
  color: OdsThemeColorIntent.primary;
}
