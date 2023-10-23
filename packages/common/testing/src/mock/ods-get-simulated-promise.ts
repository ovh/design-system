/**
 * generate a promise in error or not.
 * @param withError - promise will be in error or not
 * @param cbk - your sync callback function used when rejecting or resolving
 */
export function odsGetSimulatedPromise<T>(withError: boolean, cbk: (...args: unknown[]) => T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      withError ? reject(cbk()) : resolve(cbk());
    }, 300);
  });
}
