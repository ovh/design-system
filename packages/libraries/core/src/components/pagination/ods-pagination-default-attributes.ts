import { OdsPaginationAttributes } from './ods-pagination-attributes';

/**
 * default attribute values of pagination
 */
export const odsPaginationDefaultAttributesDoc: OdsPaginationAttributes = {
  disabled: false,
  current: 1,
  totalPages: 1,
  labelTooltipPrevious: '',
  labelTooltipNext: '',
} as const;

export const odsPaginationDefaultAttributes = odsPaginationDefaultAttributesDoc as unknown as OdsPaginationAttributes;
