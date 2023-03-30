export class OdsRadioMock {
  constructor() {
    this.ariaLabel = '';
    this.checked = false;
    this.checking = false;
    this.disabled = false;
    this.value = '';
    this.buttonTabindex = 0;
    this.setButtonTabindex = jest.fn();
    this.setFocus = jest.fn();
    this.updateState = jest.fn();
    this.radioizedComponent = null;
    this.onFocus = jest.fn();
    this.onBlur = jest.fn();
    this.emitFocus = jest.fn();
    this.emitBlur = jest.fn();
    this.emitChecked = jest.fn();
    this.emitChecking = jest.fn();
    this.beforeInit = jest.fn();
    this.afterInit = jest.fn();
    this.onDestroy = jest.fn();
    this.controller = jest.fn();
  }
}
