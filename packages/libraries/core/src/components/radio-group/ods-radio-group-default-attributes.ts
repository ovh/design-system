import { OdsRadioGroupAttributes } from './ods-radio-group-attributes';

/**
 * default attribute values of radio-group
 */
export const odsRadioGroupDefaultAttributesDoc = {
  afterSave: undefined,
  beforeSave: undefined,
  disabled: false,
  name: undefined,
  required: false,
  save: undefined,
  value: '',
} as const;

export const odsRadioGroupDefaultAttributes = odsRadioGroupDefaultAttributesDoc as OdsRadioGroupAttributes;
