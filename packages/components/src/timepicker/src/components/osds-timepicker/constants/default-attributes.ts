import type { OdsTimepickerAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsTimepickerAttribute = Object.freeze({
  clearable: false,
  currentTimezone: undefined,
  disabled: false,
  error: false,
  inline: false,
  timezones: undefined,
  value: null,
  withSeconds: false,
});

export {
  DEFAULT_ATTRIBUTE,
};
