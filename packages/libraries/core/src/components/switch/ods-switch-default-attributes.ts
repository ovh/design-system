import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsSwitchAttributes } from './ods-switch-attributes';
import { OdsSwitchSize } from './ods-switch-size';

export const odsSwitchDefaultAttributesDoc  = {
    /**
     * indicates if the pagination is entirely disabled.
     * it means no interactions (hover, click, focus, etc)
     */
    disabled: false,
    name: '',
    color: OdsThemeColorIntent.default,
    variant: undefined,
    contrasted: false,
    size: OdsSwitchSize.md,
} as const;

export const odsSwitchDefaultAttributes = odsSwitchDefaultAttributesDoc as OdsSwitchAttributes;
