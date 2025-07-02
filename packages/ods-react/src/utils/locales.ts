enum LOCALE {
  de = 'de',
  en = 'en',
  es = 'es',
  fr = 'fr',
  it = 'it',
  nl = 'nl',
  pl = 'pl',
  pt = 'pt',
}

type Locale =`${LOCALE}`;

const LOCALES = Object.freeze(Object.keys(LOCALE));

export {
  LOCALE,
  LOCALES,
  type Locale,
};
