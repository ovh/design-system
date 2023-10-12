import { OdsTimepickerAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsTimepickerAttribute = Object.freeze({
  clearable: false,
  disabled: false,
  error: false,
  inline: false,
  value: null,
  withSeconds: false
});

export {
  DEFAULT_ATTRIBUTE,
};
