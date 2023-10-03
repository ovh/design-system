import type { OdsDatagridAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsDatagridAttribute = Object.freeze({
  columns: [],
  rows: [],
  isSelectable: false,
  placeholder: 'No Data Set',
});

export {
  DEFAULT_ATTRIBUTE,
};
