import type { OdsSelectAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsSelectAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: '',
  defaultValue: null,
  disabled: false,
  error: false,
  inline: false,
  name: undefined,
  opened: false,
  required: false,
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
