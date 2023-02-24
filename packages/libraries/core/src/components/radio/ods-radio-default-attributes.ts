import { OdsRadioAttributes } from './ods-radio-attributes';

/**
 * default attribute values of radio
 */
export const odsRadioDefaultAttributesDoc = {
  afterSave: undefined,
  ariaLabel: '',
  ariaLabelledby: undefined,
  beforeSave: undefined,
  checked: false,
  checking: false,
  disabled: false,
  label: undefined,
  name: '',
  save: undefined,
  value: '',
} as const;

export const odsRadioDefaultAttributes = odsRadioDefaultAttributesDoc as OdsRadioAttributes;
