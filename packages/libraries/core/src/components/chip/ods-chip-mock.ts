import { OdsChip } from "./ods-chip";
import { OdsChipController } from "./ods-chip-controller";
import { OdsChipEvents } from "./ods-chip-events";
import { OdsChipMethods } from "./ods-chip-methods";
import { OdsChipSize } from "./ods-chip-size";
import { OdsChipVariant } from "./ods-chip-variant";
import { OdsThemeColorIntent } from "@ovhcloud/ods-theming";

export class OdsChipMock implements OdsChip<OdsChipMethods, OdsChipEvents> {
    color?: OdsThemeColorIntent;
    contrasted?: boolean;
    disabled?: boolean;
    inline?: boolean;
    removable?: boolean;
    selectable?: boolean;
    size?: OdsChipSize;
    variant?: OdsChipVariant;

    controller: OdsChipController = jest.fn() as unknown as OdsChipController;

    beforeRender = jest.fn();
}
