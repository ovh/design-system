import { OdsButtonAttributes, OdsButtonSize, OdsButtonVariant } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of button
 */
export const odsButtonBaseAttributes: OdsButtonAttributes = {
  color: OdsThemeColorIntent.default,
  size: OdsButtonSize.md,
  variant: OdsButtonVariant.flat
};
