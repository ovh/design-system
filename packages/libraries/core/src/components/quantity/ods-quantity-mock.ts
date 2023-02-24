import { HTMLOdsInputElement } from './../input/ods-input-type';
import { OdsQuantity } from './ods-quantity';
import { OdsQuantityController } from './ods-quantity-controller';
import { OdsQuantityEvents } from './ods-quantity-events';
import { OdsQuantityMethods } from './ods-quantity-methods';

/**
 * Mocked generic implementation that represents an `OdsQuantity`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsQuantityMock implements OdsQuantity<OdsQuantityMethods, OdsQuantityEvents> {
  controller: OdsQuantityController = jest.fn() as unknown as OdsQuantityController;
  el!: HTMLElement;

  input: HTMLOdsInputElement | null = null;
  plus: HTMLSlotElement | null = null;
  minus: HTMLSlotElement | null = null;

  disabled = false;

  beforeInit = jest.fn();
  afterInit = jest.fn();
  afterRender = jest.fn();
  onDestroy = jest.fn();
}
