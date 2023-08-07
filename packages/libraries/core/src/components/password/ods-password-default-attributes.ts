import { OdsPasswordAttributes } from './ods-password-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_INPUT_SIZE } from '@ovhcloud/ods-component-input';

export const odsPasswordDefaultAttributesDoc = {
    ariaLabel: null,
    ariaLabelledby: undefined,
    clearable: false,
    color: OdsThemeColorIntent.default,
    contrasted: false,
    disabled: false,
    error: false,
    flex: false,
    forbiddenValues: [],
    label: undefined,
    loading: false,
    masked: true,
    name: undefined,
    placeholder: undefined,
    readOnly: false,
    required: false,
    size: ODS_INPUT_SIZE.md,
    value: '',
} as const;

export const odsPasswordDefaultAttributes = odsPasswordDefaultAttributesDoc as unknown as OdsPasswordAttributes;
