import { useCallback, useMemo } from 'react';
import { LOCALE, LOCALES, type Locale } from '../utils/locales';

interface UseI18n {
  translate: (key: string) => string
}

function getBrowserLocales<T>(): T[] {
  return navigator.language?.split('-').map<T>((browserIsoCode) => browserIsoCode.toLowerCase() as T);
}

function getCurrentLocale(locale?: Locale): Locale {
  if (locale && LOCALES.indexOf(locale) >= 0) {
    return locale;
  }

  return getBrowserLocales<LOCALE>().find((browserLocale) => {
    return LOCALES.indexOf(browserLocale) >= 0;
  }) || LOCALE.en;
}

function useI18n(keyMap: Record<string, Record<Locale, string>>, locale?: Locale, i18n?: Record<string, string>): UseI18n {
  const currentLocale = useMemo(() => getCurrentLocale(locale), [locale]);

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
