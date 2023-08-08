import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsPaginationAttributes extends OdsComponentAttributes {
  /**
   * indicates if the pagination is entirely disabled.
   * it means no interactions (hover, click, focus, etc)
   */
  disabled: boolean;
  /**
   * Its corresponding current page.
   */
  current: number;
  /**
   * The total number of items.
   */
  totalItems?: number;
  /**
   * The total amount of pages.
   */
  totalPages: number;
  /**
   * The label of the tooltip on the arrow previous
   */
  labelTooltipPrevious: string;
  /**
   * The label of the tooltip on the arrow next
   */
   labelTooltipNext: string;
}
