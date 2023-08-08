import { OdsClipboardAttributes } from './ods-clipboard-attributes';

export const odsClipboardDefaultAttributesDoc = {
    flex: false,
    value: '',
    disabled: false,
} as const;

export const odsClipboardDefaultAttributes = odsClipboardDefaultAttributesDoc as OdsClipboardAttributes;
