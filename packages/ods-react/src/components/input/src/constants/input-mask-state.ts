enum ODS_INPUT_MASK_STATE {
  close = 'close',
  open = 'open',
}

type OdsInputMaskState =`${ODS_INPUT_MASK_STATE}`;

const ODS_INPUT_MASK_STATES = Object.freeze(Object.values(ODS_INPUT_MASK_STATE));

export {
  ODS_INPUT_MASK_STATE,
  ODS_INPUT_MASK_STATES,
  type OdsInputMaskState,
};
