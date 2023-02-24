// import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsSelectAttributes } from './ods-select-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsSelectSize } from './ods-select-size';
// import { OdsSelectSize } from './ods-select-size';

/**
 * default attribute values of select
 */
export const odsSelectDefaultAttributesDoc: OdsSelectAttributes = {
  ariaLabel: null,
  ariaLabelledby: '',

  required: false,
  disabled: false,

  defaultValue: '',
  value: '',
  color: OdsThemeColorIntent.primary,
  size: OdsSelectSize.md,
  flex: false
} as const;

export const odsSelectDefaultAttributes = odsSelectDefaultAttributesDoc as unknown as OdsSelectAttributes;
