enum ODS_BADGE_COLOR {
  neutral = 'neutral',
  information = 'information',
  success = 'success',
  warning = 'warning',
  critical = 'critical',
  alpha = 'alpha',
  beta = 'beta',
  new = 'new',
  promotion = 'promotion',
}

type OdsBadgeColor =`${ODS_BADGE_COLOR}`;

const ODS_BADGE_COLORS = Object.freeze(Object.values(ODS_BADGE_COLOR));

export {
  ODS_BADGE_COLOR,
  ODS_BADGE_COLORS,
  type OdsBadgeColor,
};
