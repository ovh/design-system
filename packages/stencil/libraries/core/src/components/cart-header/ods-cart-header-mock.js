export class OdsCartHeaderMock {
  constructor() {
    this.cart = null;
    this.controller = jest.fn();
    this.beforeInit = jest.fn();
    this.refresh = jest.fn().mockImplementation(() => Promise.resolve());
  }
}
