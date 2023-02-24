export class OdsRangeMock {
  constructor() {
    this.value = '';
    this.forbiddenValues = [];
    this.controller = jest.fn();
    this.getValidity = jest.fn();
    this.beforeInit = jest.fn();
    this.beforeRender = jest.fn();
    this.afterRender = jest.fn();
    this.onInput = jest.fn();
    this.onKeyup = jest.fn();
    this.emitChange = jest.fn();
  }
}
