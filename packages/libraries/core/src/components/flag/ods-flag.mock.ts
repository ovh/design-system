import { ODS_COUNTRY_ISO_CODE } from "../../i18n/ods-country-iso-codes.types";
import { OdsFlag } from "./ods-flag";
import { OdsFlagController } from "./ods-flag-controller";
import { OdsFlagEvents } from "./ods-flag-events";
import { OdsFlagMethods } from "./ods-flag-methods";

export class OdsFlagMock implements OdsFlag<OdsFlagMethods, OdsFlagEvents> {
  assetPath = undefined;
  beforeRender = jest.fn();
  controller: OdsFlagController = jest.fn() as unknown as OdsFlagController;
  getAssetPath = jest.fn();
  hostElement!: HTMLElement;
  iso = ODS_COUNTRY_ISO_CODE.FR;
  lazy = false;
  load = jest.fn();
  onDestroy = jest.fn();
  onInit = jest.fn();
  src = undefined;
}
