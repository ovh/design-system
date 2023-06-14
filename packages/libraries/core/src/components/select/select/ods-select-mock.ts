import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsInputValue } from '../../public-api';
import { OdsSelect } from './ods-select';
import { OdsSelectController } from './ods-select-controller';
import { odsSelectDefaultAttributes } from './ods-select-default-attributes';
import { OdsSelectEvents } from './ods-select-events';
import { OdsSelectMethods } from './ods-select-methods';
import { OdsSelectSize } from './ods-select-size';
import { OdsSelectValueChangeEventDetail } from './ods-select-value-change-event-detail';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OcdkSurface, OcdkSurfaceMock } from '@ovhcloud/ods-cdk';

export class OdsSelectMock implements OdsSelect<OdsSelectMethods, OdsSelectEvents> {
    ariaLabel: HTMLElement['ariaLabel'] = odsSelectDefaultAttributes.ariaLabel;
    ariaLabelledby: string = odsSelectDefaultAttributes.ariaLabelledby;
    required: boolean = odsSelectDefaultAttributes.required;
    disabled: boolean = odsSelectDefaultAttributes.disabled;
    defaultValue: OdsInputValue = odsSelectDefaultAttributes.defaultValue;
    value: OdsInputValue = odsSelectDefaultAttributes.value;
    flex: boolean = odsSelectDefaultAttributes.flex;
    size: OdsSelectSize = odsSelectDefaultAttributes.size;
    color: OdsThemeColorIntent.primary = odsSelectDefaultAttributes.color;
    opened?: boolean = false;

    el!: HTMLStencilElement;
    surface: OcdkSurface | undefined = new OcdkSurfaceMock() as unknown as OcdkSurface;
    anchor: HTMLElement = document.createElement('div');

    syncReferences = jest.fn();

    controller: OdsSelectController = jest.fn() as unknown as OdsSelectController;

    odsValueChange!: OdsSelectValueChangeEventDetail;
    odsFocus!: void;
    odsBlur!: void;

    reset = jest.fn();
    clear = jest.fn();
    validate = jest.fn();
    setFocus = jest.fn();
    setInputTabindex = jest.fn();
    getValidity = jest.fn();
    handleSelectClick = jest.fn();
    handleValueChange = jest.fn();
}
