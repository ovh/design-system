import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsDividerSize } from './ods-divider-size';
import { OdsDividerAttributes } from './ods-divider-attributes';

export const odsDividerDefaultAttributesDoc  = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  separator: false,
  size: OdsDividerSize.six,
} as const;

export const odsDividerDefaultAttributes = odsDividerDefaultAttributesDoc as OdsDividerAttributes;
