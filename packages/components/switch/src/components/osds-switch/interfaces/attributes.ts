import type {ODS_THEME_COLOR_INTENT} from '@ovhcloud/ods-common-theming';
import type {ODS_SWITCH_SIZE} from '../constants/switch-size';
import type {ODS_SWITCH_VARIANT} from '../constants/switch-variant';

interface OdsSwitchAttribute {
  /** main color: see component principles */
  color?: ODS_THEME_COLOR_INTENT;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** disabled: see component principles */
  disabled?: boolean;
  /** size: see component principles */
  size?: ODS_SWITCH_SIZE;
  /** used design aspect */
  variant?: ODS_SWITCH_VARIANT;
}

export {
  OdsSwitchAttribute,
};
