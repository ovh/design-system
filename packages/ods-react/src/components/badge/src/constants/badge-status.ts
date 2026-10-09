enum BADGE_STATUS {
  accent = 'accent',
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

type BadgeStatus = `${BADGE_STATUS}`;

const BADGE_STATUSES = Object.freeze(Object.values(BADGE_STATUS));

export {
  BADGE_STATUS,
  BADGE_STATUSES,
  type BadgeStatus,
};
