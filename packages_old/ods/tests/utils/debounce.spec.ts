import { debounce } from '../../src/utils/debounce';

describe('utils debounce', () => {
  beforeEach(jest.clearAllMocks);

  beforeAll(() => jest.useFakeTimers());

  afterAll(() => jest.useRealTimers());

  it('should delay the callback', () => {
    const callback = jest.fn();
    const debouncedFn = debounce(callback, 1000);

    debouncedFn();
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should call callback once', () => {
    const callback = jest.fn();
    const debouncedFn = debounce(callback, 1000);

    debouncedFn();
    jest.advanceTimersByTime(500);
    debouncedFn();
    jest.advanceTimersByTime(500);
    debouncedFn();

    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should call callback with parameters', () => {
    const callback = jest.fn();
    const debouncedFn = debounce(callback, 1000);

    debouncedFn('hello', 42);
    jest.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalledWith('hello', 42);
  });
});
