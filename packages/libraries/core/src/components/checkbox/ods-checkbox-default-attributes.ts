import { OdsCheckboxAttributes } from './ods-checkbox-attributes';

/**
 * default attribute values of checkbox
 */
export const odsCheckboxDefaultAttributesDoc  = {
  afterSave: undefined,
  ariaLabel: '',
  ariaLabelledby: undefined,
  beforeSave: undefined,
  checked: false,
  hasFocus: false,
  disabled: false,
  label: undefined,
  name: '',
  save: undefined,
  updating: false,
  value: '',
} as const;

export const odsCheckboxDefaultAttributes = odsCheckboxDefaultAttributesDoc as OdsCheckboxAttributes;
