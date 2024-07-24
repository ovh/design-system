import { type OdsPhoneNumberCountryIsoCode } from '../constants/phone-number-country-iso-code';

interface OdsPhoneNumberValueChangeEventDetail {
  isoCode?: OdsPhoneNumberCountryIsoCode;
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsPhoneNumberValueChangeEvent = CustomEvent<OdsPhoneNumberValueChangeEventDetail>;

export {
  type OdsPhoneNumberValueChangeEvent,
  type OdsPhoneNumberValueChangeEventDetail,
};
