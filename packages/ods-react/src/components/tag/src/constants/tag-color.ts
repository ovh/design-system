// Deprecated local aliases rather than renamed re-exports, so that the IDE flags each usage. The import alias keeps
// TAG_COLOR the very same enum as COLOR, as in v19: a value, a type and a namespace (TAG_COLOR.critical),
// assignable to and from the other XXX_COLOR enums.
import { COLOR, COLORS } from '../../../../utils/colors';
/**
 * @deprecated
 * Use TAG_STATUS instead, removed in v21.
 */
import TAG_COLOR = COLOR;

/**
 * @deprecated
 * Use TAG_STATUSES instead, removed in v21.
 */
const TAG_COLORS = COLORS;

/**
 * @deprecated
 * Use TagStatus instead, removed in v21.
 */
type TagColor = `${COLOR}`;

export {
  TAG_COLOR,
  TAG_COLORS,
  type TagColor,
};
