import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsCheckboxButton } from './ods-checkbox-button';
import { OdsCheckboxButtonController } from './ods-checkbox-button-controller';
import { OdsCheckboxButtonEvents } from './ods-checkbox-button-events';
import { OdsCheckboxButtonMethods } from './ods-checkbox-button-methods';
import { OdsCheckboxButtonSize } from './ods-checkbox-button-size';

export class OdsCheckboxButtonMock implements OdsCheckboxButton<OdsCheckboxButtonMethods, OdsCheckboxButtonEvents> {
    checked?: boolean;
    checking?: boolean;
    color?: OdsThemeColorIntent;
    disabled?: boolean;
    hasFocus?: boolean;
    indeterminate?: boolean;
    interactive?: boolean;
    size?: OdsCheckboxButtonSize;

    controller: OdsCheckboxButtonController = jest.fn() as unknown as OdsCheckboxButtonController;
}
