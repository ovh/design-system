import { OdsTextAttributes, OdsTextSize, OdsTextLevel } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of text
 */
export const odsTextBaseAttributes: OdsTextAttributes = {
  color: OdsThemeColorIntent.default,
  size: OdsTextSize._100,
  level: OdsTextLevel.body
};
