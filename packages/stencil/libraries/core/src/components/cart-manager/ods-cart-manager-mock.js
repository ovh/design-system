import { OdsI18n } from '../../i18n/ods-i18n';
export class OdsCartManagerMock {
  constructor() {
    this.odsI18n = new OdsI18n();
    this.sections = [];
    this.controller = jest.fn();
    this.getProductQuantity = jest.fn();
    this.getTotalAmount = jest.fn();
  }
}
