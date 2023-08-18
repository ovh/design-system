import type { OdsMessageAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsMessageAttribute = Object.freeze({
    color: OdsThemeColorIntent.default,
    contrasted: false,
    icon: undefined,
    inline: false,
    removable: false,
    type: undefined,
});

export {
  DEFAULT_ATTRIBUTE,
};
