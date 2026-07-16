/* classnames-compatible join, small enough to not be a dependency. */
type CxArg = string | undefined | null | false | Record<string, boolean | undefined>;

const cx = (...args: CxArg[]): string =>
  args
    .flatMap((arg) => {
      if (!arg) {
        return [];
      }
      if (typeof arg === 'string') {
        return [arg];
      }
      return Object.entries(arg).filter(([, on]) => on).map(([name]) => name);
    })
    .join(' ');

export { cx };
