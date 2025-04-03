enum ODS_DIVIDER_COLOR {
  dark = 'dark',
  light = 'light',
}

type OdsDividerColor = `${ODS_DIVIDER_COLOR}`;

const ODS_DIVIDER_COLORS = Object.freeze(Object.values(ODS_DIVIDER_COLOR));

export {
  ODS_DIVIDER_COLOR,
  ODS_DIVIDER_COLORS,
  type OdsDividerColor,
};
