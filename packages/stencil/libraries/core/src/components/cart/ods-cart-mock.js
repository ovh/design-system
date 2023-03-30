export class OdsCartMock {
  constructor() {
    this.cartHeader = null;
    this.controller = jest.fn();
    this.refresh = jest.fn();
    this.getItemQuantity = jest.fn();
  }
}
