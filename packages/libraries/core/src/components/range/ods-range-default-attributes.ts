import { OdsRangeAttributes } from './ods-range-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export const odsRangeDefaultAttributesDoc = {
  color: OdsThemeColorIntent.default,
  disabled: false,
  error: undefined,
  errorStateControl: undefined,
  inline: false,
  max: 100,
  min: 0,
  step: 1,
  value: '',
  forbiddenValues: [],
  formControl: undefined
} as const;

export const odsRangeDefaultAttributes = odsRangeDefaultAttributesDoc as unknown as OdsRangeAttributes;
