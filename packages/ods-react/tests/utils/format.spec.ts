import { formatPrice, formatRelativeTime } from '../../src/utils/format';

describe('formatPrice', () => {
  it('should return formatted value', () => {
    expect(formatPrice(123456.789)).toBe('123 456,79 €');
    expect(formatPrice(123456.789, 'de-DE')).toBe('123.456,79 €');
    expect(formatPrice(123456.789, 'fr-FR', 'USD')).toBe('123 456,79 $');
  });
});

describe('formatRelativeTime', () => {
  it('should return formatted value', () => {
    const now = new Date();
    expect(formatRelativeTime(now)).toBe('0 seconds ago');
    expect(formatRelativeTime(now, 'de-DE')).toBe('vor 0 Sekunden');
    expect(formatRelativeTime(now, 'fr-FR', { style: 'short' })).toBe('il y a 0 s');
  });
});
