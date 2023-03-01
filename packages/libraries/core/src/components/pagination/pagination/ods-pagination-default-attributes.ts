// import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsPaginationAttributes } from './ods-pagination-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsPaginationSize } from './ods-pagination-size';
import { OdsPaginationArrowSize } from './ods-pagination-arrow-size';

/**
 * default attribute values of select
 */
export const odsPaginationDefaultAttributesDoc: OdsPaginationAttributes = {
  disabled: false,

  defaultCurrent: 1,
  current: 1,
  totalPages: 1,
  color: OdsThemeColorIntent.primary,
  size: OdsPaginationSize.sm,
  arrowSize: OdsPaginationArrowSize.sm,
  flex: false,
} as const;

export const odsPaginationDefaultAttributes = odsPaginationDefaultAttributesDoc as unknown as OdsPaginationAttributes;
