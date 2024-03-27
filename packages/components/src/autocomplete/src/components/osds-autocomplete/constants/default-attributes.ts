import type { OdsAutocompleteAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsAutocompleteAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: '',
  clearable: false,
  defaultValue: '',
  disabled: false,
  error: false,
  icon: undefined,
  inline: false,
  minimumNumberOfCharacters: 0,
  name: undefined,
  opened: false,
  placeholder: '',
  required: false,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
