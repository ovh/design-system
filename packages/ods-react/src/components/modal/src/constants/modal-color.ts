import { COLOR } from '../../../../utils/colors';

/**
 * @deprecated
 * Color will now always be primary, if you need another color, prefer overriding it using css.
 */
enum MODAL_COLOR {
  critical = COLOR.critical,
  information = COLOR.information,
  neutral = COLOR.neutral,
  primary = COLOR.primary,
  success = COLOR.success,
  warning = COLOR.warning,
}

/**
 * @deprecated
 * Color will now always be primary, if you need another color, prefer overriding it using css.
 */
type ModalColor = `${MODAL_COLOR}`;

/**
 * @deprecated
 * Color will now always be primary, if you need another color, prefer overriding it using css.
 */
const MODAL_COLORS = Object.freeze(Object.values(MODAL_COLOR));

export {
  MODAL_COLOR,
  MODAL_COLORS,
  type ModalColor,
};
