enum ODS_BUTTON_SIZE {
  // TODO need actual list from design
  sm = 'sm',
  md = 'md',
}

type OdsButtonSize =`${ODS_BUTTON_SIZE}`;

const ODS_BUTTON_SIZES = Object.freeze(Object.values(ODS_BUTTON_SIZE));

export {
  ODS_BUTTON_SIZE,
  ODS_BUTTON_SIZES,
  type OdsButtonSize,
};
