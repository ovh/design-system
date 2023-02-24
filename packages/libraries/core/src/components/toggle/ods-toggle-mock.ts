import { OdsToggleMethods } from './ods-toggle-methods';
import { OdsToggle } from "./ods-toggle";
import { OdsToggleEvents } from './ods-toggle-events';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsToggleController } from './ods-toggle-controller';

export class OdsToggleMock implements OdsToggle<OdsToggleMethods, OdsToggleEvents> {
    contrasted?: boolean;
    checked?: boolean;
    checking?: boolean;
    color?: OdsThemeColorIntent;
    disabled?: boolean;
    interactive?: boolean;

    controller: OdsToggleController = jest.fn() as unknown as OdsToggleController;

    beforeRender = jest.fn();

}
