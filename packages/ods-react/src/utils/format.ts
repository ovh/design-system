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

export {
  formatPrice,
};
