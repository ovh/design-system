import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsInputSize } from './ods-input-size';
import { OdsInputType } from './ods-input-type';
export const odsInputDefaultAttributesDoc = {
  ariaLabel: null,
  ariaLabelledby: undefined,
  color: OdsThemeColorIntent.default,
  contrasted: false,
  defaultValue: '',
  disabled: false,
  error: false,
  flex: false,
  forbiddenValues: [],
  icon: undefined,
  label: undefined,
  max: undefined,
  min: undefined,
  name: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  size: OdsInputSize.md,
  step: undefined,
  type: OdsInputType.number,
  value: '',
};
export const odsInputDefaultAttributes = odsInputDefaultAttributesDoc;
