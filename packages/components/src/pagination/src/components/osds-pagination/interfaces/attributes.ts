import type { ODS_PAGINATION_PER_PAGE } from '../constants/pagination-per-page';

interface OdsPaginationPageContent {
  active: boolean;
}

type OdsPaginationPageList = Array<OdsPaginationPageContent>;

interface OdsPaginationAttribute {
  /**
   * Its corresponding current page.
   */
  current: number;
  /**
   * Default items per page.
   */
  defaultItemsPerPage: ODS_PAGINATION_PER_PAGE;
  /**
   * indicates if the pagination is entirely disabled.
   * it means no interactions (hover, click, focus, etc)
   */
  disabled: boolean;
  /**
   * The label of the tooltip on the arrow next
   */
  labelTooltipNext: string;
  /**
   * The label of the tooltip on the arrow previous
   */
  labelTooltipPrevious: string;
  /**
   * The total number of items.
   */
  totalItems?: number;
  /**
   * The total amount of pages.
   */
  totalPages: number;
}

export type {
  OdsPaginationAttribute,
  OdsPaginationPageList,
};
