import { OdsBreadcrumbsAttributes, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of flag
 */
export const odsBreadcrumbsBaseAttributes: OdsBreadcrumbsAttributes = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  download: '',
  href: '',
  target: OdsHTMLAnchorElementTarget._self,
  type: ''
};
