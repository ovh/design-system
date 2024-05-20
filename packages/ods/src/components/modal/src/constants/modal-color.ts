enum ODS_MODAL_COLOR {
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
}

type OdsModalColor =`${ODS_MODAL_COLOR}`;

const ODS_MODAL_COLORS = Object.freeze(Object.values(ODS_MODAL_COLOR));

export {
  ODS_MODAL_COLOR,
  ODS_MODAL_COLORS,
  type OdsModalColor,
};
