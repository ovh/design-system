import type { OdsRangeAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsRangeAttribute = Object.freeze({
  color: OdsThemeColorIntent.default,
  disabled: false,
  error: undefined,
  errorStateControl: undefined,
  flex: false,
  max: 100,
  min: 0,
  step: 1,
  value: '',
  forbiddenValues: [],
  formControl: undefined
});

export {
  DEFAULT_ATTRIBUTE
}
