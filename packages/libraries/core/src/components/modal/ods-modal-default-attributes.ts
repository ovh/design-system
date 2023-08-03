import { OdsModalAttributes } from './ods-modal-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export const odsModalDefaultAttributesDoc  = {
    color: OdsThemeColorIntent.info,
    dismissible: true,
    headline: '',
    masked: false,
} as const;

export const odsModalDefaultAttributes = odsModalDefaultAttributesDoc as OdsModalAttributes;
