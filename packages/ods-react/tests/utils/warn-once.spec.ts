import { warnOnce } from '../../src/utils/warn-once';

describe('warn-once utils', () => {
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  describe('warnOnce', () => {
    it('should log the message only once for the same key', () => {
      warnOnce('Dummy.once', 'once');
      warnOnce('Dummy.once', 'once');
      warnOnce('Dummy.once', 'once');

      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenCalledWith('once');
    });

    it('should log once per key', () => {
      warnOnce('Dummy.first', 'first');
      warnOnce('Dummy.second', 'second');
      warnOnce('Dummy.first', 'first');

      expect(warnSpy).toHaveBeenCalledTimes(2);
      expect(warnSpy).toHaveBeenNthCalledWith(1, 'first');
      expect(warnSpy).toHaveBeenNthCalledWith(2, 'second');
    });
  });
});
