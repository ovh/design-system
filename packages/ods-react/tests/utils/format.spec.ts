import { formatPrice } from '../../src/utils/format';

describe('formatPrice', () => {
  it('should return formatted value', () => {
    expect(formatPrice(123456.789)).toBe('123 456,79 €');
    expect(formatPrice(123456.789, 'de-DE')).toBe('123.456,79 €');
    expect(formatPrice(123456.789, 'fr-FR', 'USD')).toBe('123 456,79 $');
  });
});
