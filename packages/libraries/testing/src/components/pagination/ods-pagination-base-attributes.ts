import { OdsPaginationAttributes } from '@ovhcloud/ods-core';

/**
 * base attributes value of pagination
 */
export const odsPaginationBaseAttributes: OdsPaginationAttributes = {
  disabled: false,
  current: 1,
  totalPages: 1,
  labelTooltipNext: 'Next',
  labelTooltipPrevious: 'Previous',
};
