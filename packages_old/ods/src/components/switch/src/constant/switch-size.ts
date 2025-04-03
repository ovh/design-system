enum ODS_SWITCH_SIZE {
  md = 'md',
  sm = 'sm',
}

type OdsSwitchSize = `${ODS_SWITCH_SIZE}`;

const ODS_SWITCH_SIZES = Object.freeze(Object.values(ODS_SWITCH_SIZE));

export {
  ODS_SWITCH_SIZE,
  ODS_SWITCH_SIZES,
  type OdsSwitchSize,
};
