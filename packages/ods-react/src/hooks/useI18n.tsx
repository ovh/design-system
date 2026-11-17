import { useCallback, useSyncExternalStore } from 'react';
import { LOCALE, LOCALES, type Locale } from '../utils/locales';

interface UseI18n {
  translate: (key: string) => string
}

// Empty where no browser language is known, as in a server runtime without navigator: the locale
// then falls back to English.
function getBrowserLocales<T>(): T[] {
  const language = typeof navigator === 'undefined' ? undefined : navigator.language;
  return language ? language.split('-').map<T>((browserIsoCode) => browserIsoCode.toLowerCase() as T) : [];
}

function getBrowserLocale(): Locale {
  return getBrowserLocales<LOCALE>().find((browserLocale) => {
    return LOCALES.indexOf(browserLocale) >= 0;
  }) || LOCALE.en;
}

function getServerLocale(): Locale {
  return LOCALE.en;
}

// Datepicker and PhoneNumber take a BCP 47 locale for Intl: a regional one (fr-FR) reads the
// translations of its language.
function toLocale(locale?: string): Locale | undefined {
  const language = locale?.split('-')[0].toLowerCase() as Locale | undefined;
  return language && LOCALES.indexOf(language) >= 0 ? language : undefined;
}

// The browser language is not watched: it only changes with a reload.
function subscribe(): () => void {
  return () => {};
}

/* Without an explicit locale, the server and the first hydration render both use English, so that
   their markup matches; React then renders again with the browser language. */
function useI18n(keyMap: Record<string, Record<Locale, string>>, locale?: Locale, i18n?: Record<string, string>): UseI18n {
  const browserLocale = useSyncExternalStore(subscribe, getBrowserLocale, getServerLocale);
  const currentLocale = toLocale(locale) || browserLocale;

  const translate = useCallback((key: string) => {
    if (i18n && i18n[key]) {
      return i18n[key];
    }
    return keyMap[key][currentLocale] || '';
  }, [currentLocale, i18n, keyMap]);

  return { translate };
}

export {
  type UseI18n,
  useI18n,
};
