enum BADGE_COLOR {
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

type BadgeColor =`${BADGE_COLOR}`;

const BADGE_COLORS = Object.freeze(Object.values(BADGE_COLOR));

export {
  BADGE_COLOR,
  BADGE_COLORS,
  type BadgeColor,
};
