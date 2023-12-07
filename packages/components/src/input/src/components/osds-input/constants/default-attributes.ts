import type { OdsInputAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_GENERIC_FIELD_SIZE, ODS_INPUT_TYPE } from '@ovhcloud/ods-common-core';

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
  size: ODS_GENERIC_FIELD_SIZE.md,
  step: undefined,
  type: ODS_INPUT_TYPE.number,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
