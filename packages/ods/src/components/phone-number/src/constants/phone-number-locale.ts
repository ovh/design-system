enum ODS_PHONE_NUMBER_LOCALE {
  en = 'en',
  fr = 'fr',
}

type OdsPhoneNumberLocale = `${ODS_PHONE_NUMBER_LOCALE}`;

const ODS_PHONE_NUMBER_LOCALES = Object.freeze(Object.values(ODS_PHONE_NUMBER_LOCALE));

export {
  ODS_PHONE_NUMBER_LOCALE,
  ODS_PHONE_NUMBER_LOCALES,
  type OdsPhoneNumberLocale,
};
