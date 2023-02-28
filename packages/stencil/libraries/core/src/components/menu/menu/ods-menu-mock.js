/**
 * Mocked generic implementation that represents an `OdsMenu`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsMenuMock {
  constructor() {
    this.controller = jest.fn();
    this.title = null;
    this.surface = undefined;
    this.disabled = false;
    this.afterInit = jest.fn();
    this.propagateDisabledToChild = jest.fn();
    this.handleTriggerClick = jest.fn();
    this.handleTriggerKey = jest.fn();
    this.handleSurfaceKey = jest.fn();
    this.checkForClickOutside = jest.fn();
    this.syncReferences = jest.fn();
  }
}
