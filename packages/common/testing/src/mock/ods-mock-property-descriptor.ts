/**
 * mock a property descriptor on the given element.
 * It is very useful for overriding some property of native element in a stencil testing environment
 * (MockHTMLElement)
 * @param element - element on which to mock a property
 * @param property - property name
 * @param get - function that returns the value of the property
 */
export function OdsMockPropertyDescriptor(element: Element, property: string, get: () => unknown): void {
  const wantedDescriptor: PropertyDescriptor = {
    get,
    enumerable: true,
    configurable: true
  };

  const descriptor = Object.getOwnPropertyDescriptor(element, property);

  if (descriptor) {
    descriptor.get = wantedDescriptor.get;
    Object.defineProperty(element, property, descriptor);
  } else {
    Object.defineProperty(element, property, wantedDescriptor);
  }
}
