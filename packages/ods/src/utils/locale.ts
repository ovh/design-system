enum ODS_LOCALE {
  AR = 'ar', // Arabic
  BG = 'bg', // Bulgarian
  CS = 'cs', // Czech
  DA = 'da', // Danish
  DE = 'de', // German
  EL = 'el', // Greek
  EN = 'en', // English
  EO = 'eo', // Esperanto
  ES = 'es', // Spanish
  ET = 'et', // Estonian
  EU = 'eu', // Basque
  FI = 'fi', // Finnish
  FR = 'fr', // French
  HR = 'hr', // Croatian
  HU = 'hu', // Hungirian
  HY = 'hy', // Armenian
  IT = 'it', // Italian
  JA = 'ja', // Japanese
  KO = 'ko', // Korean
  LT = 'lt', // Lithuanian
  NL = 'nl', // Dutch
  NO = 'no', // Norwegian
  PL = 'pl', // Polish
  PT = 'pt', // Portuguese
  RO = 'ro', // Romanian
  RU = 'ru', // Russian
  SL = 'sl', // Serbian
  SV = 'sv', // Swedish
  TH = 'th', // Thai
  UK = 'uk', // Ukrainian
  ZH = 'zh', // Chinese
}

type OdsLocale = `${ODS_LOCALE}`;

const ODS_LOCALES = Object.freeze(Object.values(ODS_LOCALE));

export {
  ODS_LOCALE,
  ODS_LOCALES,
  type OdsLocale,
};
