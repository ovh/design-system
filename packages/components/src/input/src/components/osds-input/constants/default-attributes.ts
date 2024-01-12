import type { OdsInputAttribute } from '../interfaces/attributes';
import { ODS_COMMON_INPUT_TYPE } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsInputAttribute = Object.freeze({
  ariaLabel: null,
  color: ODS_THEME_COLOR_INTENT.default,
  defaultValue: '',
  disabled: false,
  error: false,
  inline: false,
  name: '',
  type: ODS_COMMON_INPUT_TYPE.text,
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};
