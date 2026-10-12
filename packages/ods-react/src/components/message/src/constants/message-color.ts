// Deprecated local aliases rather than renamed re-exports, so that the IDE flags each usage. The import alias keeps
// MESSAGE_COLOR the very same enum as COLOR, as in v19: a value, a type and a namespace (MESSAGE_COLOR.critical),
// assignable to and from the other XXX_COLOR enums.
import { COLOR, COLORS } from '../../../../utils/colors';
/**
 * @deprecated
 * Use MESSAGE_STATUS instead, removed in v21.
 */
import MESSAGE_COLOR = COLOR;

/**
 * @deprecated
 * Use MESSAGE_STATUSES instead, removed in v21.
 */
const MESSAGE_COLORS = COLORS;

/**
 * @deprecated
 * Use MessageStatus instead, removed in v21.
 */
type MessageColor = `${COLOR}`;

export {
  MESSAGE_COLOR,
  MESSAGE_COLORS,
  type MessageColor,
};
