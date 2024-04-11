enum ODS_BADGE_COLOR {
  information = 'information',
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
