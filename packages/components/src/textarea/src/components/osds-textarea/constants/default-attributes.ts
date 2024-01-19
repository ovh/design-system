import type { OdsTextareaAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsTextareaAttribute = Object.freeze({
  ariaLabel: null,
  defaultValue: null,
  disabled: false,
  error: false,
  inline: false,
  name: '',
  resizable: true,
  spellcheck: false,
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
