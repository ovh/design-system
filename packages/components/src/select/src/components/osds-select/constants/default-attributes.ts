import type { OdsSelectAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsSelectAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: '',
  color: ODS_THEME_COLOR_INTENT.primary,
  defaultValue: null,
  disabled: false,
  error: false,
  inline: false,
  name: '',
  opened: false,
  required: false,
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
