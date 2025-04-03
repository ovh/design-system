enum ODS_TAG_SIZE {
  lg = 'lg',
  md = 'md',
}

type OdsTagSize = `${ODS_TAG_SIZE}`;

const ODS_TAG_SIZES = Object.freeze(Object.values(ODS_TAG_SIZE));

export {
  ODS_TAG_SIZE,
  ODS_TAG_SIZES,
  type OdsTagSize,
};
