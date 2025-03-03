enum ODS_SPINNER_SIZE {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

type OdsSpinnerSize =`${ODS_SPINNER_SIZE}`;

const ODS_SPINNER_SIZES = Object.freeze(Object.values(ODS_SPINNER_SIZE));

export type {
  OdsSpinnerSize,
};
export {
  ODS_SPINNER_SIZE,
  ODS_SPINNER_SIZES,
};

