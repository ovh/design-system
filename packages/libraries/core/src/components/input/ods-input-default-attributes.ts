import { OdsInputAttributes } from './ods-input-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsInputSize } from './ods-input-size';
import { OdsInputType } from './ods-input-type';

export const odsInputDefaultAttributesDoc = {
  ariaLabel: null,
  ariaLabelledby: undefined,
  clearable: false,
  color: OdsThemeColorIntent.default,
  contrasted: false,
  defaultValue: '',
  disabled: false,
  error: false,
  flex: false,
  forbiddenValues: [],
  hideable: false,
  icon: undefined,
  label: undefined,
  loading: false,
  masked: false,
  max: undefined,
  min: undefined,
  name: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  size: OdsInputSize.md,
  step: undefined,
  type: OdsInputType.text,
  value: '',
} as const;

export const odsInputDefaultAttributes = odsInputDefaultAttributesDoc as unknown as OdsInputAttributes;
