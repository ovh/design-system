import type { E2EElement } from '@stencil/core/testing';

interface OdsE2EElement<T extends Record<string, any>> extends E2EElement {
  callMethod(methodName: keyof T, ...methodArgs: any[]): Promise<any>;
}

export {
  OdsE2EElement
}
