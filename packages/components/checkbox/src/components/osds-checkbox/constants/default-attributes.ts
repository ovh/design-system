import type { OdsCheckboxAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsCheckboxAttribute = Object.freeze({
  afterSave: undefined,
  ariaLabel: '',
  ariaLabelledby: undefined,
  beforeSave: undefined,
  checked: false,
  disabled: false,
  hasFocus: false,
  label: undefined,
  name: '',
  save: undefined,
  updating: false,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};