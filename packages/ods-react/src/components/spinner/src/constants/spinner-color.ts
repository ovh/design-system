import { COLOR } from '../../../../utils/colors';

enum SPINNER_COLOR {
  neutral = COLOR.neutral,
  primary = COLOR.primary,
}

type SpinnerColor =`${SPINNER_COLOR}`;

const SPINNER_COLORS = Object.freeze(Object.values(SPINNER_COLOR));

export {
  SPINNER_COLOR,
  SPINNER_COLORS,
  type SpinnerColor,
};
