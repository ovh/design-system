import { OdsThemeColorIntent } from '@ods/theming';
import { OdsSelectSize } from './ods-select-size';
// import { OdsSelectSize } from './ods-select-size';
/**
 * default attribute values of select
 */
export const odsSelectDefaultAttributesDoc = {
  ariaLabel: null,
  ariaLabelledby: '',
  required: false,
  disabled: false,
  defaultValue: '',
  value: '',
  color: OdsThemeColorIntent.primary,
  size: OdsSelectSize.md,
  flex: false
};
export const odsSelectDefaultAttributes = odsSelectDefaultAttributesDoc;
