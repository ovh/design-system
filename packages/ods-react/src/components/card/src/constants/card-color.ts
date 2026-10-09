// Deprecated local aliases rather than renamed re-exports, so that the IDE flags each usage. The import alias keeps
// CARD_COLOR the very same enum as COLOR, as in v19: a value, a type and a namespace (CARD_COLOR.critical),
// assignable to and from the other XXX_COLOR enums.
import { COLOR, COLORS } from '../../../../utils/colors';
/**
 * @deprecated
 * Use CARD_STATUS instead, removed in v21.
 */
import CARD_COLOR = COLOR;

/**
 * @deprecated
 * Use CARD_STATUSES instead, removed in v21.
 */
const CARD_COLORS = COLORS;

/**
 * @deprecated
 * Use CardStatus instead, removed in v21.
 */
type CardColor = `${COLOR}`;

export {
  CARD_COLOR,
  CARD_COLORS,
  type CardColor,
};
