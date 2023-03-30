import { ODS_COUNTRY_ISO_CODE } from "../../i18n/ods-country-iso-codes.types";
export class OdsFlagMock {
  constructor() {
    this.assetPath = undefined;
    this.beforeRender = jest.fn();
    this.controller = jest.fn();
    this.getAssetPath = jest.fn();
    this.iso = ODS_COUNTRY_ISO_CODE.FR;
    this.lazy = false;
    this.load = jest.fn();
    this.onDestroy = jest.fn();
    this.onInit = jest.fn();
    this.src = undefined;
  }
}
