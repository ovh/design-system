export class OdsTileMock {
  constructor() {
    this.checked = false;
    this.checking = false;
    this.disabled = false;
    this.hasFocus = false;
    this.loading = false;
    this.controller = jest.fn();
    this.beforeRender = jest.fn();
  }
}
