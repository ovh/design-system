enum DIVIDER_COLOR {
  dark = 'dark',
  light = 'light',
}

type DividerColor = `${DIVIDER_COLOR}`;

const DIVIDER_COLORS = Object.freeze(Object.values(DIVIDER_COLOR));

export {
  DIVIDER_COLOR,
  DIVIDER_COLORS,
  type DividerColor,
};
