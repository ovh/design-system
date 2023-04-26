// import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsPaginationAttributes } from './ods-pagination-attributes';

/**
 * default attribute values of pagination
 */
export const odsPaginationDefaultAttributesDoc: OdsPaginationAttributes = {
  disabled: false,
  current: 1,
  total: 1,
} as const;

export const odsPaginationDefaultAttributes = odsPaginationDefaultAttributesDoc as unknown as OdsPaginationAttributes;
