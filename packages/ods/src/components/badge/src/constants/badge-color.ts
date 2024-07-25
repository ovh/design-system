enum ODS_BADGE_COLOR {
  alpha = 'alpha',
  beta = 'beta',
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  new = 'new',
  promotion = 'promotion',
  success = 'success',
  warning = 'warning',
}

type OdsBadgeColor =`${ODS_BADGE_COLOR}`;

const ODS_BADGE_COLORS = Object.freeze(Object.values(ODS_BADGE_COLOR));

export {
  ODS_BADGE_COLOR,
  ODS_BADGE_COLORS,
  type OdsBadgeColor,
};
