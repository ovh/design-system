import type { OdsDatagridAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsDatagridAttribute = Object.freeze({
  columns: [],
  isSelectable: false,
  noResultLabel: '',
  rows: [],
});

export {
  DEFAULT_ATTRIBUTE,
};
