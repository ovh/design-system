import type { OdsDatagridAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsDatagridAttribute = Object.freeze({
  columns: [],
  hasHideableColumns: true,
  height: 0,
  hideableColumns: [],
  isSelectable: false,
  noResultLabel: '',
  rowHeight: 52,
  rows: [],
});

export {
  DEFAULT_ATTRIBUTE,
};
