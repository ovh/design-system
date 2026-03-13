enum DIVIDER_ORIENTATION {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

type DividerOrientation = `${DIVIDER_ORIENTATION}`;

const DIVIDER_ORIENTATIONS = Object.freeze(Object.values(DIVIDER_ORIENTATION));

export {
  DIVIDER_ORIENTATION,
  DIVIDER_ORIENTATIONS,
  type DividerOrientation,
};
