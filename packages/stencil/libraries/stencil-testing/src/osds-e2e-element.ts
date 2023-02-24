import { E2EElement } from '@stencil/core/testing';

export interface osdsE2EElement<T extends Record<string, any>> extends E2EElement {
  callMethod(methodName: keyof T, ...methodArgs: any[]): Promise<any>;
}
