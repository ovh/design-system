enum ODS_BADGE_SIZE {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
}

type OdsBadgeSize =`${ODS_BADGE_SIZE}`;

const ODS_BADGE_SIZES = Object.freeze(Object.values(ODS_BADGE_SIZE));

export {
  ODS_BADGE_SIZE,
  ODS_BADGE_SIZES,
  type OdsBadgeSize,
};
