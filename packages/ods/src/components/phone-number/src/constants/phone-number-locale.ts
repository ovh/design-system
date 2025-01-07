import { ODS_LOCALE, ODS_LOCALES, type OdsLocale } from '../../../../utils/locale';

// Needed copy otherwise Stencil generate wrong types
type OdsPhoneNumberLocale = OdsLocale;

export {
  ODS_LOCALE as ODS_PHONE_NUMBER_LOCALE,
  ODS_LOCALES as ODS_PHONE_NUMBER_LOCALES,
  type OdsPhoneNumberLocale,
};
