import { OdsBreadcrumbItemAttributes } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * Base attributes value
 */
export const odsBreadcrumbBaseAttributes: OdsBreadcrumbItemAttributes = {
  active: true,
  collapsed: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  displayed: true,
  showCollapsedIndicator: false,
};
