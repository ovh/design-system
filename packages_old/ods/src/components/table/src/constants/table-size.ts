enum ODS_TABLE_SIZE {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
}

type OdsTableSize =`${ODS_TABLE_SIZE}`;

const ODS_TABLE_SIZES = Object.freeze(Object.values(ODS_TABLE_SIZE));

export {
  ODS_TABLE_SIZE,
  ODS_TABLE_SIZES,
  type OdsTableSize,
};
