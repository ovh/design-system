import { copyToClipboard, getRandomHTMLId } from '../../src/utils/dom';

describe('utils dom', () => {
  beforeEach(jest.clearAllMocks);

  describe('copyToClipboard', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });

    it('should call the navigator writeText method with empty value if not set', async() => {
      await copyToClipboard();

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('');
    });

    it('should call the navigator writeText method with given value', async() => {
      const dummyValue = 'dummy value';

      await copyToClipboard(dummyValue);

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(dummyValue);
    });
  });

  describe('getRandomHTMLId', () => {
    it('should return unique HTML valid ids', async() => {
      const htmlId1 = getRandomHTMLId();
      const htmlId2 = getRandomHTMLId();

      expect(htmlId1).not.toBe(htmlId2);
      expect(/^[0-9]/.test(htmlId1)).toBe(false);
      expect(/^[0-9]/.test(htmlId2)).toBe(false);
    });
  });
});
