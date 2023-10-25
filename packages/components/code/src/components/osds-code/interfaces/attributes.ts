import type { ODS_CODE_SIZE } from '../constants/code-size';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';


interface OdsCodeAttribute {
  /** main color: see component principles */
  color?: ODS_THEME_COLOR_INTENT;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** size: see component principles */
  size?: ODS_CODE_SIZE;
}

export {
  OdsCodeAttribute,
};
