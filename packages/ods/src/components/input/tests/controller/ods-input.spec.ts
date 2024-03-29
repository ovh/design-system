import { handleKeySpace, isPassword } from '../../src/controller/ods-input';

describe('ods-input controller', () => {

  beforeEach(jest.clearAllMocks);

  describe('isPassword', () => {
    it('should return true if not undefined', async() => {
      expect(isPassword(undefined)).toBe(false);
      expect(isPassword(false)).toBe(true);
      expect(isPassword(true)).toBe(true);
    });
  });

  describe('handleKeySpace', () => {
    it('should do nothing if disabled', async() => {
      const callback = jest.fn();
      const event = {
        key: ' ',
      } as unknown as KeyboardEvent;
      handleKeySpace(event, true, callback)
      expect(callback).not.toHaveBeenCalled();
    });

    it('should call callback if space', async() => {
      const callback = jest.fn();
      const event = {
        key: ' ',
      } as unknown as KeyboardEvent;
      handleKeySpace(event, false, callback)
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should do nothing if not space', async() => {
      const callback = jest.fn();
      const event = {
        key: 'Enter',
      } as unknown as KeyboardEvent;
      handleKeySpace(event, false, callback)
      expect(callback).not.toHaveBeenCalled();
    });
  });
});
