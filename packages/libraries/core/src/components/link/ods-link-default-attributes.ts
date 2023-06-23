import { OdsLinkAttributes } from './ods-link-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * default attribute values of link
 */
export const odsLinkDefaultAttributesDoc = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  download: undefined,
  href: undefined,
  referrerpolicy: undefined,
  rel: undefined,
  target: undefined,
  type: undefined,
} as const;

export const odsLinkDefaultAttributes = odsLinkDefaultAttributesDoc as OdsLinkAttributes;
