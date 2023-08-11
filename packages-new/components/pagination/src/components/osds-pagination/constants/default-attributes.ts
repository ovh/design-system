import type { OdsPaginationAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsPaginationAttribute = Object.freeze({
  current: 1,
  disabled: false,
  labelTooltipNext: '',
  labelTooltipPrevious: '',
  totalPages: 1,
});

export {
  DEFAULT_ATTRIBUTE,
};
