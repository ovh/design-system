import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsButtonSize } from './ods-button-size';
import { OdsButtonVariant } from './ods-button-variant';
import { OdsButtonType } from './ods-button-type';
import { OdsButtonAttributes } from './ods-button-attributes';

/**
 * Default attribute values of Button component
 * (this are values for `odsButtonDefaultAttributes`)
 * @enum
 */
export const odsButtonDefaultAttributesDoc  = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  download: undefined,
  flex: false,
  href: undefined,
  rel: undefined,
  size: OdsButtonSize.md,
  target: undefined,
  type: OdsButtonType.button,
  variant: OdsButtonVariant.flat,
} as const;

export const odsButtonDefaultAttributes = odsButtonDefaultAttributesDoc as OdsButtonAttributes;
