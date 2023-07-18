import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsSwitchAttributes } from './ods-switch-attributes';
import { OdsSwitchSize } from './ods-switch-size';

export const odsSwitchDefaultAttributesDoc: OdsSwitchAttributes = {
    disabled: false,
    color: OdsThemeColorIntent.default,
    variant: undefined,
    contrasted: false,
    size: OdsSwitchSize.md,
} as const;

export const odsSwitchDefaultAttributes = odsSwitchDefaultAttributesDoc;
