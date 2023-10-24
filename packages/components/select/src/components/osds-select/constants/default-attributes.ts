import type { OdsSelectAttribute } from '../interfaces/attributes';
import { ODS_SELECT_SIZE } from './select-size';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsSelectAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: '',
  color: ODS_THEME_COLOR_INTENT.primary,
  defaultValue: '',
  disabled: false,
  error: false,
  inline: false,
  opened: false,
  required: false,
  size: ODS_SELECT_SIZE.md,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
