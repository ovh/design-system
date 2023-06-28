import { OdsMessageAttributes } from './ods-message-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export const odsMessageDefaultAttributes: OdsMessageAttributes = {
  color: OdsThemeColorIntent.default,
  inline: false,
  icon: undefined,
  removable: false,
  type: undefined,
  contrasted: false
};
