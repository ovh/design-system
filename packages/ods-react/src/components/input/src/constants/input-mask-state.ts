enum INPUT_MASK_STATE {
  close = 'close',
  open = 'open',
}

type InputMaskState =`${INPUT_MASK_STATE}`;

const INPUT_MASK_STATES = Object.freeze(Object.values(INPUT_MASK_STATE));

export {
  INPUT_MASK_STATE,
  INPUT_MASK_STATES,
  type InputMaskState,
};
