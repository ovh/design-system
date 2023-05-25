import { OdsSpinnerAttributes } from './ods-spinner-attributes';
import { OdsSpinnerMode } from './ods-spinner-mode';
import { OdsSpinnerSize } from './ods-spinner-size';

export const odsSpinnerDefaultAttributesDoc  = {
  // default attributes
  size: OdsSpinnerSize.md,
  flex: false,
  contrasted: false,
  mode: OdsSpinnerMode.INDETERMINATE,
} as const;

export const odsSpinnerDefaultAttributes = odsSpinnerDefaultAttributesDoc as OdsSpinnerAttributes;
