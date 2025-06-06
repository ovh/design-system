enum COLOR {
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  primary = 'primary',
  success = 'success',
  warning = 'warning',
}

type Color = `${COLOR}`;

const COLORS = Object.freeze(Object.values(COLOR));

export {
  COLOR,
  COLORS,
  type Color,
};
