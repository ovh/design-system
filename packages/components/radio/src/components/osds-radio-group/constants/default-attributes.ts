import type { OdsRadioGroupAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsRadioGroupAttribute = Object.freeze({
  afterSave: undefined,
  beforeSave: undefined,
  disabled: false,
  name: undefined,
  required: false,
  save: undefined,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};