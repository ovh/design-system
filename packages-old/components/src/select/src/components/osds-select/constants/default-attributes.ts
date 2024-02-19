import type { OdsSelectAttribute } from '../interfaces/attributes';

import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { ODS_SELECT_SIZE } from './select-size';

const DEFAULT_ATTRIBUTE: OdsSelectAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: '',
  color: ODS_THEME_COLOR_INTENT.primary,
  defaultValue: '',
  disabled: false,
  error: false,
  inline: false,
  name: undefined,
  opened: false,
  required: false,
  size: ODS_SELECT_SIZE.md,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
