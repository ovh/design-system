import type { OdsInputAttribute } from '../interfaces/attributes';
import { ODS_COMMON_FIELD_SIZE, ODS_COMMON_INPUT_TYPE } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

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
  name: '',
  placeholder: undefined,
  prefixValue: undefined,
  readOnly: false,
  required: false,
  size: ODS_COMMON_FIELD_SIZE.md,
  step: undefined,
  type: ODS_COMMON_INPUT_TYPE.number,
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
