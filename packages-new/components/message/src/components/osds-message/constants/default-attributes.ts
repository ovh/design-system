import type { OdsMessageAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsMessageAttribute = Object.freeze({
    color: OdsThemeColorIntent.default,
    inline: false,
    icon: undefined,
    removable: false,
    type: undefined,
    contrasted: false
});

export {
  DEFAULT_ATTRIBUTE,
};
