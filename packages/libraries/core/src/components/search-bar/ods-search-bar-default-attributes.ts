import { OdsSearchBarAttributes } from './ods-search-bar-attributes';

export const odsSearchBarDefaultAttributesDoc = {
    contrasted: false,
    disabled: false,
    loading: false,
    options: [] as { label: string; value: string; }[],
    placeholder: undefined,
    value: ''
} as const;

export const odsSearchBarDefaultAttributes = odsSearchBarDefaultAttributesDoc as OdsSearchBarAttributes;
