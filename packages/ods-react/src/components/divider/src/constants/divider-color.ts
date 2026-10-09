import { COLOR } from '../../../../utils/colors';

/**
 * @deprecated
 * Override the background-color in CSS instead, removed in v21.
 */
enum DIVIDER_COLOR {
  neutral = COLOR.neutral,
  primary = COLOR.primary,
}

/**
 * @deprecated
 * Override the background-color in CSS instead, removed in v21.
 */
type DividerColor = `${DIVIDER_COLOR}`;

/**
 * @deprecated
 * Override the background-color in CSS instead, removed in v21.
 */
const DIVIDER_COLORS = Object.freeze(Object.values(DIVIDER_COLOR));

export {
  DIVIDER_COLOR,
  DIVIDER_COLORS,
  type DividerColor,
};
