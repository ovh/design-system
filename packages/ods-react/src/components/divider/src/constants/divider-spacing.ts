enum DIVIDER_SPACING {
  _0 = '0',
  _2 = '2',
  _4 = '4',
  _6 = '6',
  _8 = '8',
  _12 = '12',
  _16 = '16',
  _24 = '24',
  _32 = '32',
  _40 = '40',
  _48 = '48',
  _64 = '64',
}

type DividerSpacing = `${DIVIDER_SPACING}`;

const DIVIDER_SPACINGS = Object.freeze(Object.values(DIVIDER_SPACING));

export {
  DIVIDER_SPACING,
  DIVIDER_SPACINGS,
  type DividerSpacing,
};
