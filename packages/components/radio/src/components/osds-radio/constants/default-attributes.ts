import type { OdsRadioAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsRadioAttribute = Object.freeze({
  afterSave: undefined,
  ariaLabel: '',
  ariaLabelledby: undefined,
  beforeSave: undefined,
  checked: false,
  checking: false,
  disabled: false,
  label: undefined,
  name: '',
  save: undefined,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};