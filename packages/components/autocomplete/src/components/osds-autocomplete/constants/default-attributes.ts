import { OdsAutocompleteAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsAutocompleteAttribute = Object.freeze({
  clearable: false,
  color: ODS_THEME_COLOR_INTENT.primary,
  disabled: false,
  error: false,
  icon: undefined,
  inline: false,
  minimumNumberOfCharacters: 2,
  placeholder: '',
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};