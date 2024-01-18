import type { OdsPasswordAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsPasswordAttribute = Object.freeze({
  ariaLabel: null,
  defaultValue: '',
  disabled: false,
  error: false,
  masked: true,
  name: '',
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
