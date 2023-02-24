/**
 * Mocked generic implementation that represents an `OdsAccordionGroup`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsAccordionGroupMock {
  constructor() {
    this.accordions = [];
    this.controller = jest.fn();
    this.registerAccordion = jest.fn();
    this.unRegisterAccordion = jest.fn();
    this.beforeInit = jest.fn();
    this.onDestroy = jest.fn();
  }
}
