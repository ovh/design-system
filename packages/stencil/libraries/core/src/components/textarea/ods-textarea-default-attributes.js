import { OdsTextAreaSize } from './ods-textarea-size';
import { OdsThemeColorIntent } from '@ods/theming';
export const odsTextAreaDefaultAttributesDoc = {
  textAreaId: undefined,
  ariaLabel: null,
  ariaLabelledby: undefined,
  color: OdsThemeColorIntent.text,
  cols: undefined,
  contrasted: false,
  defaultValue: undefined,
  disabled: false,
  error: false,
  errorStateControl: undefined,
  flex: false,
  formControl: undefined,
  name: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  resizable: true,
  rows: undefined,
  size: OdsTextAreaSize.md,
  spellcheck: false,
  value: '',
  hasFocus: false
};
export const odsTextAreaDefaultAttributes = odsTextAreaDefaultAttributesDoc;
