enum BUTTON_COLOR {
  critical = 'critical',
  neutral = 'neutral',
  primary = 'primary',
}

type ButtonColor =`${BUTTON_COLOR}`;

const BUTTON_COLORS = Object.freeze(Object.values(BUTTON_COLOR));

export {
  BUTTON_COLOR,
  BUTTON_COLORS,
  type ButtonColor,
};
