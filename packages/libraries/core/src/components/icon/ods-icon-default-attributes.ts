import { OdsIconAttributes } from './ods-icon-attributes';
import { OdsIconSize } from './ods-icon-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export const odsIconDefaultAttributesDoc  = {
  ariaName: '',
  color: OdsThemeColorIntent.default,
  contrasted: false,
  hoverable: false,
  name: undefined,
  size: OdsIconSize.md
} as const;

export const odsIconDefaultAttributes = odsIconDefaultAttributesDoc as OdsIconAttributes;
