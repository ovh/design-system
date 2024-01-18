import type { OdsPasswordAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsPasswordAttribute = Object.freeze({
  ariaLabel: null,
  defaultValue: null,
  disabled: false,
  error: false,
  inline: false,
  masked: true,
  name: '',
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
