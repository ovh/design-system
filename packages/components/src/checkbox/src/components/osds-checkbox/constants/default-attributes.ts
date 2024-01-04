import type { OdsCheckboxAttribute } from '../interfaces/attributes';
import { ODS_COMMON_FIELD_SIZE } from '@ovhcloud/ods-common-core';

const DEFAULT_ATTRIBUTE: OdsCheckboxAttribute = Object.freeze({
  afterSave: undefined,
  ariaLabel: '',
  ariaLabelledby: undefined,
  beforeSave: undefined,
  checked: false,
  defaultValue: '',
  disabled: false,
  error: false,
  hasFocus: false,
  label: undefined,
  name: '',
  save: undefined,
  size: ODS_COMMON_FIELD_SIZE.md,
  updating: false,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};