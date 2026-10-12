// Deprecated local aliases rather than renamed re-exports, so that the IDE flags each usage. The import alias keeps
// TOAST_COLOR the very same enum as COLOR, as in v19: a value, a type and a namespace (TOAST_COLOR.critical),
// assignable to and from the other XXX_COLOR enums.
import { COLOR, COLORS } from '../../../../utils/colors';
/**
 * @deprecated
 * Use TOAST_STATUS instead, removed in v21.
 */
import TOAST_COLOR = COLOR;

/**
 * @deprecated
 * Use TOAST_STATUSES instead, removed in v21.
 */
const TOAST_COLORS = COLORS;

/**
 * @deprecated
 * Use ToastStatus instead, removed in v21.
 */
type ToastColor = `${COLOR}`;

export {
  TOAST_COLOR,
  TOAST_COLORS,
  type ToastColor,
};
