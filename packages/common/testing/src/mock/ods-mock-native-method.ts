/**
 * mock a native method on a vanilla element like.
 * apply it with stencil:
 * mock methods from the vanilla input into the MockInputElement (for instance) from stencil
 * (stencil did not develop some native method)
 * https://github.com/ionic-team/stencil/issues/1964#issuecomment-722344630
 *
 * @param element - element on which to mock the method
 * @param method - method name
 * @param get - mock to apply (function)
 */
export function OdsMockNativeMethod<T extends Element>(element: T, method: keyof T, get: () => unknown): void {
  element[method] = get as unknown as T[typeof method];
}
