import { OdsLinkAttributes, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of flag
 */
export const odsLinkBaseAttributes: OdsLinkAttributes = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  download: '',
  href: '',
  target: OdsHTMLAnchorElementTarget._self,
  type: ''
};
