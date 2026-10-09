import { COLOR } from '../../../../utils/colors';

/**
 * @deprecated
 * Set the --ods-spinner-color CSS custom property instead, removed in v21.
 */
enum SPINNER_COLOR {
  neutral = COLOR.neutral,
  primary = COLOR.primary,
}

/**
 * @deprecated
 * Set the --ods-spinner-color CSS custom property instead, removed in v21.
 */
type SpinnerColor =`${SPINNER_COLOR}`;

/**
 * @deprecated
 * Set the --ods-spinner-color CSS custom property instead, removed in v21.
 */
const SPINNER_COLORS = Object.freeze(Object.values(SPINNER_COLOR));

export {
  SPINNER_COLOR,
  SPINNER_COLORS,
  type SpinnerColor,
};
