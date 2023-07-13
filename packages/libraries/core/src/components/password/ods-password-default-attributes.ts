import { OdsPasswordAttributes } from './ods-password-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsInputSize } from '../input/ods-input-size';

export const odsPasswordDefaultAttributesDoc = {
    ariaLabel: null,
    ariaLabelledby: undefined,
    clearable: false,
    color: OdsThemeColorIntent.default,
    contrasted: false,
    disabled: false,
    flex: false,
    forbiddenValues: [],
    label: undefined,
    loading: false,
    masked: true,
    name: undefined,
    placeholder: undefined,
    readOnly: false,
    required: false,
    size: OdsInputSize.md,
    value: '',
} as const;

export const odsPasswordDefaultAttributes = odsPasswordDefaultAttributesDoc as unknown as OdsPasswordAttributes;
