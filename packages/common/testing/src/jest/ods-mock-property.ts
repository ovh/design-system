
const mocks = new Map();

/**
 * mock a property of a class, prototype or object in order to have an updated object descriptor of the property.
 * in case of not already defined property descriptor, it will create one.
 * in case of already defined property descriptor, it updates it.
 * in all case it defines a getter and a setter if not defined, and finally make the property descriptor configurable
 *
 * for mocking property you could do
 * ```
 * const spyConsoleWarn = jest.spyOn(OdsLogger.prototype, "warn");
 * // setup test here
 * expect(spyConsoleWarn).toHaveBeenCalledWith(expected);
 * ```
 * but all the `warn` method will be spied.
 *
 * ---
 *
 * if you want more control, we can do :
 * ```
 * odsMockProperty(OsdsQuantity.prototype as unknown as OdsComponentForTesting, 'logger');
 *
 * const loggerMocked = new OdsLogger('myContextLogger');
 * const loggerSpied = jest.spyOn(loggerMocked, 'warn');
 * jest.spyOn(OsdsQuantity.prototype as unknown as OdsComponentForTesting, 'logger', 'get')
 *   .mockImplementation(() => loggerMocked);
 *
 * // setup test here
 * expect(loggerSpied).toHaveBeenCalledWith(expected);
 * ```
 *
 * don't forget to unmock with `odsUndoMock`
 * @see odsUnmockProperty
 *
 * @param object - object or class or prototype to mock
 * @param property - the public/private property to mock
 * @param value - optional value to return when called
 */
export function odsMockProperty<T extends unknown, K extends keyof T>(object: T, property: K, value?: T[K]): void {
  const descriptor = Object.getOwnPropertyDescriptor(object, property);
  const mocksForThisObject = mocks.get(object) || {};
  mocksForThisObject[property] = descriptor;
  mocks.set(object, mocksForThisObject);
  const newDescriptor = {
    ...(descriptor ? descriptor : {}),
    get: descriptor?.get ? descriptor.get : () => value,
    set: descriptor?.set ? descriptor.set : (v: unknown) => v,
    configurable: true };
  delete newDescriptor.value;
  delete newDescriptor.writable;
  Object.defineProperty(object, property, newDescriptor);
}

/**
 * unmock a previously mocked property.
 * @example
 * ```
 * afterEach(() => {
 *   odsUndoMockProperty(MyClassA.prototype as unknown as MyClassAForTesting, 'myProp');
 * })
 * ```
 *
 * @see odsMockProperty
 *
 * @param object - object or class or prototype to unmock
 * @param property - the public/private property to unmock
 */
export function odsUnmockProperty<T extends {}, K extends keyof T>(object: T, property: K): void {
  const obj = mocks.get(object);
  if (obj && Object.keys(obj).some((p) => p === property)) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, property);
    if (descriptor) {
      Object.defineProperty(object, property, descriptor);
    } else {
      Object.defineProperty(object, property, obj[property]);
    }
  }
}
