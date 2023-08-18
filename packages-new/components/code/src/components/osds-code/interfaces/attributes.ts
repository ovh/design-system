import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { ODS_CODE_SIZE } from '../constants/code-size';

interface OdsCodeAttribute {
  /** main color: see component principles */
  color?: OdsThemeColorIntent;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** size: see component principles */
  size?: ODS_CODE_SIZE;
}

export {
  OdsCodeAttribute
}
