export class OdsCodeMock {
  constructor() {
    this.beforeInit = jest.fn();
    this.controller = jest.fn();
    this.createCopyIconElement = jest.fn().mockImplementation(() => document.createElement('osds-icon'));
    this.emitCopy = jest.fn();
    this.onCopyClick = jest.fn();
  }
}
