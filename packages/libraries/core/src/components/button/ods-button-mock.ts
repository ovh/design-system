import { OdsButtonEvents } from './ods-button-events';
import { OdsButtonMethods } from './ods-button-methods';
import { OdsButton } from './ods-button';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsButtonController } from './ods-button-controller';
import { OdsButtonSize } from './ods-button-size';
import { OdsButtonType } from './ods-button-type';
import { OdsButtonVariant } from './ods-button-variant';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

export class OdsButtonMock implements OdsButton<OdsButtonMethods, OdsButtonEvents> {
    color?: OdsThemeColorIntent;
    contrasted?: boolean;
    disabled?: boolean;
    flex?: boolean;
    href?: string;
    size?: OdsButtonSize;
    target?: OdsHTMLAnchorElementTarget;
    rel?: OdsHTMLAnchorElementRel;
    download?: HTMLAnchorElement['download'];
    type?: OdsButtonType;
    variant?: OdsButtonVariant;

    controller: OdsButtonController = jest.fn() as unknown as OdsButtonController;

    beforeRender = jest.fn();
}
