import type { OdsSwitchAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_SWITCH_SIZE } from './switch-size';

const DEFAULT_ATTRIBUTE: OdsSwitchAttribute = Object.freeze({
    color: OdsThemeColorIntent.default,
    contrasted: false,
    disabled: false,
    size: ODS_SWITCH_SIZE.md,
    variant: undefined,
});

export {
DEFAULT_ATTRIBUTE,
};