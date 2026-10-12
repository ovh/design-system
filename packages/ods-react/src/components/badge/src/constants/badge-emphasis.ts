enum BADGE_EMPHASIS {
  high = 'high',
  low = 'low',
  medium = 'medium',
}

type BadgeEmphasis = `${BADGE_EMPHASIS}`;

const BADGE_EMPHASES = Object.freeze(Object.values(BADGE_EMPHASIS));

export {
  BADGE_EMPHASIS,
  BADGE_EMPHASES,
  type BadgeEmphasis,
};
