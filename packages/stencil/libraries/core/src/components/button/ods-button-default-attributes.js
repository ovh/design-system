import { OdsThemeColorIntent } from '@ods/theming';
import { OdsButtonSize } from './ods-button-size';
import { OdsButtonVariant } from './ods-button-variant';
import { OdsButtonType } from './ods-button-type';
/**
 * Default attribute values of Button component
 * (this are values for `odsButtonDefaultAttributes`)
 * @enum
 */
export const odsButtonDefaultAttributesDoc = {
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
};
export const odsButtonDefaultAttributes = odsButtonDefaultAttributesDoc;
