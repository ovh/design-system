import { OdsFormFieldAttributes } from './ods-form-field-attributes';

export const odsFormFieldDefaultAttributesDoc  = {
  error: '',
  flex: false,
} as const;

export const odsFormFieldDefaultAttributes = odsFormFieldDefaultAttributesDoc as OdsFormFieldAttributes;
