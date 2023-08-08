import { OdsThemeColorIntent } from "@ovhcloud/ods-theming";
import { OdsSwitch } from "../public-api";
import { OdsSwitchChangedEventDetail } from "./ods-switch-change-event-detail";
import { OdsSwitchController } from "./ods-switch-controller";
import { OdsSwitchEvents } from "./ods-switch-events";
import { OdsSwitchMethods } from "./ods-switch-methods";
import { OdsSwitchSize } from "./ods-switch-size";
import { OdsSwitchVariant } from "./ods-switch-variant";

export class OdsSwitchMock implements OdsSwitch<OdsSwitchMethods, OdsSwitchEvents> {
    controller: OdsSwitchController = jest.fn() as unknown as OdsSwitchController;
    el!: HTMLElement;
    odsSwitchChanged!: OdsSwitchChangedEventDetail; 

    size = OdsSwitchSize.md;
    contrasted = false;
    disabled = false;
    color = OdsThemeColorIntent.default;
    variant = OdsSwitchVariant.flat;
}
  