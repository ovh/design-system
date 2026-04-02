import { formatRelativeTime as vendorFormatRelativeTime } from '@zag-js/i18n-utils';

/**
 * Format a numeric value to a price matching given locale format with expected currency.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat Intl.NumberFormat}
 * @param value
 *  The numeric value to format.
 * @param locale
 *  The locale to use.
 * @param currency
 *  The currency expected.
 */
function formatPrice(value: number, locale = 'fr-FR', currency = 'EUR'): string {
  return new Intl.NumberFormat(locale, {
    currency,
    currencyDisplay: 'narrowSymbol',
    style: 'currency',
  }).format(value);
}

/**
 * Format a date to a human readable relative time (like 'a month ago').
 * @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat Intl.RelativeTimeFormatOptions}
 * @param date
 *  The date to format.
 * @param locale
 *  The locale to use.
 * @param option
 *  Language-sensitive formatting options.
 */
function formatRelativeTime(date: Date, locale = 'en-GB', option?: Intl.RelativeTimeFormatOptions): string {
  return vendorFormatRelativeTime(date, locale, option);
}

export {
  formatPrice,
  formatRelativeTime,
};
