import { OdsTextAttributes } from './ods-text-attributes';
import { OdsThemeColorIntent, OdsThemeColorHue } from '@ovhcloud/ods-theming';
import { OdsTextSize } from './ods-text-size';
import { OdsTextLevel } from './ods-text-level';

/**
 * default attribute values of flag
 */
export const odsTextDefaultAttributesDoc = {
  breakSpaces: false,
  color: OdsThemeColorIntent.default,
  contrasted: false,
  level: OdsTextLevel.body,
  size: OdsTextSize._100,
  hue: OdsThemeColorHue._500
} as const;

export const odsTextDefaultAttributes = odsTextDefaultAttributesDoc as OdsTextAttributes;
