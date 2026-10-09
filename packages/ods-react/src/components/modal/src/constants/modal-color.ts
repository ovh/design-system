import { COLOR } from '../../../../utils/colors';

/**
 * @deprecated
 * Pass role="alertdialog" to ModalContent instead of color="critical", removed in v21.
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
 * Pass role="alertdialog" to ModalContent instead of color="critical", removed in v21.
 */
type ModalColor = `${MODAL_COLOR}`;

/**
 * @deprecated
 * Pass role="alertdialog" to ModalContent instead of color="critical", removed in v21.
 */
const MODAL_COLORS = Object.freeze(Object.values(MODAL_COLOR));

export {
  MODAL_COLOR,
  MODAL_COLORS,
  type ModalColor,
};
