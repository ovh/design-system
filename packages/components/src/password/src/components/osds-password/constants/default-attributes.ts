import type { OdsPasswordAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsPasswordAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: undefined,
  clearable: false,
  color: ODS_THEME_COLOR_INTENT.default,
  defaultValue: '',
  disabled: false,
  error: false,
  forbiddenValues: [],
  inline: false,
  label: undefined,
  loading: false,
  masked: true,
  name: '',
  placeholder: undefined,
  readOnly: false,
  required: false,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
