import type { OdsTextAreaAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_TEXTAREA_SIZE } from './textarea-size';

const DEFAULT_ATTRIBUTE: OdsTextAreaAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: undefined,
  color: OdsThemeColorIntent.text,
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
