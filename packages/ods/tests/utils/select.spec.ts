import { placeholderPlugin } from '../../src/utils/select';

describe('utils select', () => {
  beforeEach(jest.clearAllMocks);

  describe('placeholderPlugin', () => {
    it('should set correct listeners', () => {
      const dummyThis = {
        hook: jest.fn(),
        on: jest.fn(),
      };

      placeholderPlugin.bind(dummyThis)();

      expect(dummyThis.on).toHaveBeenNthCalledWith(1, 'initialize', expect.any(Function));
      expect(dummyThis.on).toHaveBeenNthCalledWith(2, 'item_add', expect.any(Function));
      expect(dummyThis.on).toHaveBeenNthCalledWith(3, 'item_remove', expect.any(Function));
      expect(dummyThis.hook).toHaveBeenCalledWith('after', 'setup', expect.any(Function));
    });

  });
});
