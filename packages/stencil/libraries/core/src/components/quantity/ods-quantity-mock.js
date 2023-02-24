/**
 * Mocked generic implementation that represents an `OdsQuantity`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsQuantityMock {
  constructor() {
    this.controller = jest.fn();
    this.input = null;
    this.plus = null;
    this.minus = null;
    this.disabled = false;
    this.beforeInit = jest.fn();
    this.afterInit = jest.fn();
    this.afterRender = jest.fn();
    this.onDestroy = jest.fn();
  }
}
