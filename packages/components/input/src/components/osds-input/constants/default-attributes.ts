import type {OdsInputAttribute} from '../interfaces/attributes';
import {ODS_THEME_COLOR_INTENT} from '@ovhcloud/ods-common-theming';
import {ODS_INPUT_SIZE} from './input-size';
import {ODS_INPUT_TYPE} from './input-type';

const DEFAULT_ATTRIBUTE: OdsInputAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: undefined,
  clearable: false,
  color: ODS_THEME_COLOR_INTENT.default,
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
  prefixValue: undefined,
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
