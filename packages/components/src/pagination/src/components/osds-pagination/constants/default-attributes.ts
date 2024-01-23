import type { OdsPaginationAttribute } from '../interfaces/attributes';
import { ODS_PAGINATION_PER_PAGE_MIN } from './pagination-per-page';

const DEFAULT_ATTRIBUTE: OdsPaginationAttribute = Object.freeze({
  current: 1,
  defaultItemsPerPage: ODS_PAGINATION_PER_PAGE_MIN,
  disabled: false,
  labelTooltipNext: '',
  labelTooltipPrevious: '',
  totalPages: 1,
});

export {
  DEFAULT_ATTRIBUTE,
};
