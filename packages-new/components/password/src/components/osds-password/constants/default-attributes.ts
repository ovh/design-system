import type { OdsPasswordAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_INPUT_SIZE } from '@ovhcloud/ods-component-input';

const DEFAULT_ATTRIBUTE: OdsPasswordAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: undefined,
  clearable: false,
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  error: false,
  forbiddenValues: [],
  inline: false,
  label: undefined,
  loading: false,
  masked: true,
  name: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  size: ODS_INPUT_SIZE.md,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
