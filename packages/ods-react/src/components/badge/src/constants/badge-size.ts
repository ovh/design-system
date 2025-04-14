enum BADGE_SIZE {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
}

type BadgeSize =`${BADGE_SIZE}`;

const BADGE_SIZES = Object.freeze(Object.values(BADGE_SIZE));

export {
  BADGE_SIZE,
  BADGE_SIZES,
  type BadgeSize,
};
