/**
 * Mocked generic implementation that represents an `OdsAccordion`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsAccordionMock {
  constructor() {
    this.accordionGroup = null;
    this.opened = false;
    this.controller = jest.fn();
    this.emitToggle = jest.fn();
    this.afterInit = jest.fn();
    this.beforeInit = jest.fn();
    this.onDestroy = jest.fn();
  }
}
