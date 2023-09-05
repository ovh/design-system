import type { OdsTextAreaAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_TEXTAREA_SIZE } from './textarea-size';

const DEFAULT_ATTRIBUTE: OdsTextAreaAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: undefined,
  color: ODS_THEME_COLOR_INTENT.text,
  cols: undefined,
  contrasted: false,
  defaultValue: undefined,
  disabled: false,
  error: false,
  errorStateControl: undefined,
  formControl: undefined,
  hasFocus: false,
  inline: false,
  name: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  resizable: true,
  rows: undefined,
  size: ODS_TEXTAREA_SIZE.md,
  spellcheck: false,
  textAreaId: undefined,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
