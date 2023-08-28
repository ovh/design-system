import type { OdsModalAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsModalAttribute = Object.freeze({
    color: OdsThemeColorIntent.info,
    dismissible: true,
    headline: '',
    masked: false,
});

export {
    DEFAULT_ATTRIBUTE,
};
