import { TEXT_PRESET } from '../../src';
import { getTag } from '../../src/controller/text';

describe('Text controller', () => {
  describe('getTag', () => {
    it('should return the correct tag', () => {
      // @ts-ignore for test purpose
      expect(getTag()).toBe('p');
      expect(getTag(TEXT_PRESET.caption)).toBe('span');
      expect(getTag(TEXT_PRESET.code)).toBe('code');
      expect(getTag(TEXT_PRESET.heading1)).toBe('h1');
      expect(getTag(TEXT_PRESET.heading2)).toBe('h2');
      expect(getTag(TEXT_PRESET.heading3)).toBe('h3');
      expect(getTag(TEXT_PRESET.heading4)).toBe('h4');
      expect(getTag(TEXT_PRESET.heading5)).toBe('h5');
      expect(getTag(TEXT_PRESET.heading6)).toBe('h6');
      expect(getTag(TEXT_PRESET.label)).toBe('label');
      expect(getTag(TEXT_PRESET.paragraph)).toBe('p');
      expect(getTag(TEXT_PRESET.span)).toBe('span');
    });
  });
});
