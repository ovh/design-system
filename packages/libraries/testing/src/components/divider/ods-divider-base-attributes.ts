import { OdsDividerAttributes, OdsDividerSize } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of divider
 */
export const odsDividerBaseAttributes: OdsDividerAttributes = {
  color: OdsThemeColorIntent.default,
  size: OdsDividerSize.six,
  separator: false
};
