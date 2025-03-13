enum ODS_BUTTON_COLOR {
  critical = 'critical',
  neutral = 'neutral',
  primary = 'primary',
}

type OdsButtonColor =`${ODS_BUTTON_COLOR}`;

const ODS_BUTTON_COLORS = Object.freeze(Object.values(ODS_BUTTON_COLOR));

export {
  ODS_BUTTON_COLOR,
  ODS_BUTTON_COLORS,
  type OdsButtonColor,
};
