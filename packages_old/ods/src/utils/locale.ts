enum ODS_LOCALE {
  de = 'de', // German
  en = 'en', // English
  es = 'es', // Spanish
  fr = 'fr', // French
  it = 'it', // Italian
  nl = 'nl', // Dutch
  pl = 'pl', // Polish
  pt = 'pt', // Portuguese
}

type OdsLocale = `${ODS_LOCALE}`;

const ODS_LOCALES = Object.freeze(Object.values(ODS_LOCALE));

export {
  ODS_LOCALE,
  ODS_LOCALES,
  type OdsLocale,
};
