import { ODS_COUNTRY_ISO_CODE } from "../../i18n/ods-country-iso-codes.types";
import { OdsLocationTile } from "./ods-location-tile";
import { OdsLocationTileController } from "./ods-location-tile-controller";
import { OdsLocationTileEvents } from "./ods-location-tile-events";
import { OdsLocationTileMethods } from "./ods-location-tile-methods";
import { OdsLocationTileVariant } from "./ods-location-tile-variant";
import { OdsThemeColorIntent } from "@ovhcloud/ods-theming";
import { ODS_TILE_SIZE } from "@ovhcloud/ods-component-tile";

export class OdsLocationTileMock implements OdsLocationTile<OdsLocationTileMethods, OdsLocationTileEvents> {
    checked = false;
    checking = false;
    color?: OdsThemeColorIntent;
    disabled = false;
    flex?: boolean;
    interactive?: boolean;
    hasFocus = false;
    iso?: ODS_COUNTRY_ISO_CODE;
    size?: ODS_TILE_SIZE;
    variant?: OdsLocationTileVariant;

    controller: OdsLocationTileController = jest.fn() as unknown as OdsLocationTileController;
    beforeRender = jest.fn();
}
