export class OdsLocationTileMock {
  constructor() {
    this.checked = false;
    this.checking = false;
    this.disabled = false;
    this.hasFocus = false;
    this.controller = jest.fn();
    this.beforeRender = jest.fn();
  }
}
