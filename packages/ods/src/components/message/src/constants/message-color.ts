enum ODS_MESSAGE_COLOR {
  critical = 'critical',
  danger = 'danger',
  information = 'information',
  success = 'success',
  warning = 'warning',
}

type OdsMessageColor =`${ODS_MESSAGE_COLOR}`;

const ODS_MESSAGE_COLORS = Object.freeze(Object.values(ODS_MESSAGE_COLOR));

export {
  ODS_MESSAGE_COLOR,
  ODS_MESSAGE_COLORS,
  type OdsMessageColor,
};
