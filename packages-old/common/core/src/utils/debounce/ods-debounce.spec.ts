import { odsDebounce } from './ods-debounce';

describe('utils:debounce', () => {
  describe('ods-debounce', () => {
    jest.useFakeTimers();

    it('should wait the given amount of time before calling the function', () => {
      const func = jest.fn();
      const debouncedFunc = odsDebounce(func, 500);

      // First execution
      debouncedFunc();

      // Second call before the wait period is finished
      jest.advanceTimersByTime(250);
      debouncedFunc();

      // Fast-forward time
      jest.runAllTimers();

      expect(func).toBeCalledTimes(1);
    });
  });
});
