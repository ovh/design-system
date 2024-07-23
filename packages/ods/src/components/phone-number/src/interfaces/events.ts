import { type OdsPhoneNumberCountryIsoCode } from '../constants/phone-number-country-iso-code';

interface OdsPhoneNumberChangeEventDetail {
  isoCode?: OdsPhoneNumberCountryIsoCode;
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsPhoneNumberChangeEvent = CustomEvent<OdsPhoneNumberChangeEventDetail>;

export {
  type OdsPhoneNumberChangeEvent,
  type OdsPhoneNumberChangeEventDetail,
};
