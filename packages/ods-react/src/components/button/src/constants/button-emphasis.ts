enum BUTTON_EMPHASIS {
  high = 'high',
  low = 'low',
  medium = 'medium',
}

type ButtonEmphasis = `${BUTTON_EMPHASIS}`;

const BUTTON_EMPHASES = Object.freeze(Object.values(BUTTON_EMPHASIS));

export {
  BUTTON_EMPHASIS,
  BUTTON_EMPHASES,
  type ButtonEmphasis,
};
