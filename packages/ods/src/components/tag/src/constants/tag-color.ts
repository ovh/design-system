enum ODS_TAG_COLOR {
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
}

type OdsTagColor = `${ODS_TAG_COLOR}`;

const ODS_TAG_COLORS = Object.freeze(Object.values(ODS_TAG_COLOR));

export {
  ODS_TAG_COLOR,
  ODS_TAG_COLORS,
  type OdsTagColor,
};
