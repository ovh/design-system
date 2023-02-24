import { OdsIconName, OdsIconSize } from "./ods-icon-size";

import { OdsIcon } from "./ods-icon";
import { OdsIconController } from "./ods-icon-controller";
import { OdsIconEvents } from "./ods-icon-events";
import { OdsIconMethods } from "./ods-icon-methods";
import { OdsThemeColorIntent } from "@ovhcloud/ods-theming";

export class OdsIconMock implements OdsIcon<OdsIconMethods, OdsIconEvents> {
    ariaName = '';
    color?: OdsThemeColorIntent;
    contrasted?: boolean;
    name?: OdsIconName;
    size?: OdsIconSize;

    controller: OdsIconController = jest.fn() as unknown as OdsIconController;

    beforeRender = jest.fn();
}
