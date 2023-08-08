import type { OdsInputAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_INPUT_SIZE } from './input-size';
import { ODS_INPUT_TYPE } from './input-type';

const DEFAULT_ATTRIBUTE: OdsInputAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: undefined,
  clearable: false,
  color: OdsThemeColorIntent.default,
  contrasted: false,
  defaultValue: '',
  disabled: false,
  error: false,
  forbiddenValues: [],
  icon: undefined,
  inline: false,
  label: undefined,
  loading: false,
  masked: true,
  max: undefined,
  min: undefined,
  name: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  size: ODS_INPUT_SIZE.md,
  step: undefined,
  type: ODS_INPUT_TYPE.number,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
