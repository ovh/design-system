import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_INPUT_SIZE } from '@ovhcloud/ods-component-input';

import type { OdsPasswordAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsPasswordAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: undefined,
  clearable: false,
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  disabled: false,
  error: false,
  forbiddenValues: [],
  inline: false,
  label: undefined,
  loading: false,
  masked: true,
  name: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  size: ODS_INPUT_SIZE.md,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
