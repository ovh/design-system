import { warnDeprecated } from '../../src/utils/deprecation';

describe('deprecation utils', () => {
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  describe('warnDeprecated', () => {
    it('should log the message only once for the same key', () => {
      warnDeprecated('Dummy.once', '[DEPRECATED]: once');
      warnDeprecated('Dummy.once', '[DEPRECATED]: once');
      warnDeprecated('Dummy.once', '[DEPRECATED]: once');

      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenCalledWith('[DEPRECATED]: once');
    });

    it('should log once per key', () => {
      warnDeprecated('Dummy.first', '[DEPRECATED]: first');
      warnDeprecated('Dummy.second', '[DEPRECATED]: second');
      warnDeprecated('Dummy.first', '[DEPRECATED]: first');

      expect(warnSpy).toHaveBeenCalledTimes(2);
      expect(warnSpy).toHaveBeenNthCalledWith(1, '[DEPRECATED]: first');
      expect(warnSpy).toHaveBeenNthCalledWith(2, '[DEPRECATED]: second');
    });
  });
});
