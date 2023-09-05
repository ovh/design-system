import type { OdsRangeAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsRangeAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.default,
  disabled: false,
  error: undefined,
  errorStateControl: undefined,
  forbiddenValues: [],
  formControl: undefined,
  inline: false,
  max: 100,
  min: 0,
  step: 1,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE
}
