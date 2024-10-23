import { handleKeySpaceEnter, isPassword } from '../../src/controller/ods-input';

describe('ods-input controller', () => {

  beforeEach(jest.clearAllMocks);

  describe('isPassword', () => {
    it('should return true if not undefined', async() => {
      expect(isPassword(undefined)).toBe(false);
      expect(isPassword(false)).toBe(true);
      expect(isPassword(true)).toBe(true);
    });
  });

  describe('handleKeySpaceEnter', () => {
    it('should do nothing if disabled', async() => {
      const callback = jest.fn();
      const event = {
        key: ' ',
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as unknown as KeyboardEvent;
      handleKeySpaceEnter(event, true, callback);
      expect(callback).not.toHaveBeenCalled();
    });

    it('should call callback if space', async() => {
      const callback = jest.fn();
      const event = {
        key: ' ',
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as unknown as KeyboardEvent;
      handleKeySpaceEnter(event, false, callback);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should call callback if Enter', async() => {
      const callback = jest.fn();
      const event = {
        key: 'Enter',
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as unknown as KeyboardEvent;
      handleKeySpaceEnter(event, false, callback);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should do nothing if not space', async() => {
      const callback = jest.fn();
      const event = {
        key: 'Escape',
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as unknown as KeyboardEvent;
      handleKeySpaceEnter(event, false, callback);
      expect(callback).not.toHaveBeenCalled();
    });
  });
});
