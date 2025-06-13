import { COLOR } from '../../../../utils/colors';

enum DIVIDER_COLOR {
  neutral = COLOR.neutral,
  primary = COLOR.primary,
}

type DividerColor = `${DIVIDER_COLOR}`;

const DIVIDER_COLORS = Object.freeze(Object.values(DIVIDER_COLOR));

export {
  DIVIDER_COLOR,
  DIVIDER_COLORS,
  type DividerColor,
};
