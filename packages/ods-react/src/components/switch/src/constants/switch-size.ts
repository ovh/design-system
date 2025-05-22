enum SWITCH_SIZE {
  md = 'md',
  sm = 'sm',
}

type SwitchSize = `${SWITCH_SIZE}`;

const SWITCH_SIZES = Object.freeze(Object.values(SWITCH_SIZE));

export {
  SWITCH_SIZE,
  SWITCH_SIZES,
  type SwitchSize,
};
