/**
 * Mocked generic implementation that represents an `OdsMessage`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsMessageMock {
  constructor() {
    this.controller = jest.fn();
    this.removeClicked = jest.fn();
    this.beforeInit = jest.fn();
  }
}
