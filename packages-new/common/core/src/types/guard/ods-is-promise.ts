/**
 * Determine if the argument is shaped like a Promise.
 * see Angular team: https://github.com/angular/angular/blob/58408d6a60bd43b89cb1d9ad6f8812c8e696d42d/packages/compiler/src/util.ts#L225
 */
export function isPromise<T = unknown>(obj?: any): obj is Promise<T> {
  // allow any Promise/A+ compliant thenable.
  // It's up to the caller to ensure that obj.then conforms to the spec
  return !!obj && typeof obj.then === 'function';
}
