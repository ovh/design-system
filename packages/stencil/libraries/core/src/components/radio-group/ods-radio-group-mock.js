export class OdsRadioGroupMock {
  constructor() {
    this.disabled = false;
    this.value = '';
    this.inputId = '';
    this.getRadios = jest.fn();
    this.registerRadio = jest.fn();
    this.unregisterRadio = jest.fn();
    this.updateState = jest.fn();
    this.radios = [];
    this.emitChange = jest.fn();
    this.emitDisabled = jest.fn();
    this.onDestroy = jest.fn();
    this.controller = jest.fn();
  }
}
