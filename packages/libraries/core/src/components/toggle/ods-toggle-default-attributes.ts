import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsToggleAttributes } from './ods-toggle-attributes';

export const odsToggleDefaultAttributes: OdsToggleAttributes = {
  contrasted: false,
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.primary,
  disabled: false,
  interactive: true
};
