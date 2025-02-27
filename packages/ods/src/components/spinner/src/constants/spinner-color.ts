enum ODS_SPINNER_COLOR {
  neutral = 'neutral',
  primary = 'primary',
  white = 'white',
}

type OdsSpinnerColor =`${ODS_SPINNER_COLOR}`;

const ODS_SPINNER_COLORS = Object.freeze(Object.values(ODS_SPINNER_COLOR));

export {
  ODS_SPINNER_COLOR,
  ODS_SPINNER_COLORS,
  type OdsSpinnerColor,
};
