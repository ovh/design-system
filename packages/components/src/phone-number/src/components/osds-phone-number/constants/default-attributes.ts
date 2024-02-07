import type { OdsPhoneNumberAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsPhoneNumberAttribute = Object.freeze({
  clearable: false,
  countries: [],
  defaultValue: '',
  disabled: false,
  error: false,
  isoCode: undefined,
  locale: undefined,
  name: '',
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
