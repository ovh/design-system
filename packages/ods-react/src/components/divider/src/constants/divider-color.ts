import { COLOR } from '../../../../utils/colors';

/**
 * @deprecated
 * Color will now always be primary, if you need another color, prefer overriding it using css.
 */
enum DIVIDER_COLOR {
  neutral = COLOR.neutral,
  primary = COLOR.primary,
}

/**
 * @deprecated
 * Color will now always be primary, if you need another color, prefer overriding it using css.
 */
type DividerColor = `${DIVIDER_COLOR}`;

/**
 * @deprecated
 * Color will now always be primary, if you need another color, prefer overriding it using css.
 */
const DIVIDER_COLORS = Object.freeze(Object.values(DIVIDER_COLOR));

export {
  DIVIDER_COLOR,
  DIVIDER_COLORS,
  type DividerColor,
};
