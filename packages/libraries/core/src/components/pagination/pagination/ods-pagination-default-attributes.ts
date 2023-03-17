// import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsPaginationAttributes } from './ods-pagination-attributes';

/**
 * default attribute values of select
 */
export const odsPaginationDefaultAttributesDoc: OdsPaginationAttributes = {
  disabled: false,
  defaultCurrent: 1,
  current: 1,
  totalPages: 1,
} as const;

export const odsPaginationDefaultAttributes = odsPaginationDefaultAttributesDoc as unknown as OdsPaginationAttributes;
