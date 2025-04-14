enum BUTTON_SIZE {
  md = 'md',
  sm = 'sm',
  xs = 'xs',
}

type ButtonSize =`${BUTTON_SIZE}`;

const BUTTON_SIZES = Object.freeze(Object.values(BUTTON_SIZE));

export {
  BUTTON_SIZE,
  BUTTON_SIZES,
  type ButtonSize,
};
