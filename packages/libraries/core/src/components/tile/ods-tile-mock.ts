import { OdsThemeColorIntent } from "@ovhcloud/ods-theming";
import { OdsTile } from "./ods-tile";
import { OdsTileController } from "./ods-tile-controller";
import { OdsTileEvents } from "./ods-tile-events";
import { OdsTileMethods } from "./ods-tile-methods";
import { OdsTileSize } from "./ods-tile-size";
import { OdsTileVariant } from "./ods-tile-variant";

export class OdsTileMock implements OdsTile<OdsTileMethods, OdsTileEvents> {
  checked = false;
  checking = false;
  color?: OdsThemeColorIntent;
  disabled = false;
  flex?: boolean;
  interactive?: boolean;
  hasFocus = false;
  loading = false;
  rounded?: boolean;
  size?: OdsTileSize;
  variant?: OdsTileVariant;

  controller: OdsTileController = jest.fn() as unknown as OdsTileController;

  beforeRender = jest.fn();
}
