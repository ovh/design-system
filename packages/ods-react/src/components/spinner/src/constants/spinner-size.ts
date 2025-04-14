enum SPINNER_SIZE {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

type SpinnerSize =`${SPINNER_SIZE}`;

const SPINNER_SIZES = Object.freeze(Object.values(SPINNER_SIZE));

export {
  SPINNER_SIZE,
  SPINNER_SIZES,
  type SpinnerSize,
};

