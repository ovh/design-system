import type {OdsPhoneNumberAttribute} from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsPhoneNumberAttribute = Object.freeze({
  clearable: false,
  countries: [],
  disabled: false,
  error: false,
  isoCode: undefined,
  locale: undefined,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
