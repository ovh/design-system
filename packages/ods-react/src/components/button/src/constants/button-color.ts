// Deprecated local aliases rather than renamed re-exports, so that the IDE flags each usage. The import alias keeps
// BUTTON_COLOR the very same enum as COLOR, as in v19: a value, a type and a namespace (BUTTON_COLOR.critical),
// assignable to and from the other XXX_COLOR enums.
import { COLOR, COLORS } from '../../../../utils/colors';
/**
 * @deprecated
 * Use BUTTON_STATUS instead, removed in v21.
 */
import BUTTON_COLOR = COLOR;

/**
 * @deprecated
 * Use BUTTON_STATUSES instead, removed in v21.
 */
const BUTTON_COLORS = COLORS;

/**
 * @deprecated
 * Use ButtonStatus instead, removed in v21.
 */
type ButtonColor = `${COLOR}`;

export {
  BUTTON_COLOR,
  BUTTON_COLORS,
  type ButtonColor,
};
