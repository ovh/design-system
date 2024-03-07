enum ODS_SPINNER_COLOR {
  primary = 'primary',
}

type OdsSpinnerColor = keyof typeof ODS_SPINNER_COLOR;

const ODS_SPINNER_COLORS = Object.freeze(Object.values(ODS_SPINNER_COLOR));

export type {
  OdsSpinnerColor,
};
export {
  ODS_SPINNER_COLOR,
  ODS_SPINNER_COLORS,
};
