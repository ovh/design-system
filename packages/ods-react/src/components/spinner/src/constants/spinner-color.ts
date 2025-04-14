enum SPINNER_COLOR {
  neutral = 'neutral',
  primary = 'primary',
  white = 'white',
}

type SpinnerColor =`${SPINNER_COLOR}`;

const SPINNER_COLORS = Object.freeze(Object.values(SPINNER_COLOR));

export {
  SPINNER_COLOR,
  SPINNER_COLORS,
  type SpinnerColor,
};
