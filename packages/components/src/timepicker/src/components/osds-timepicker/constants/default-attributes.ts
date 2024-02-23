import type { OdsTimepickerAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsTimepickerAttribute = Object.freeze({
  ariaLabel: null,
  clearable: false,
  currentTimezone: undefined,
  defaultValue: null,
  disabled: false,
  error: false,
  inline: false,
  name: '',
  timezones: undefined,
  value: '',
  withSeconds: false,
});

export {
  DEFAULT_ATTRIBUTE,
};
