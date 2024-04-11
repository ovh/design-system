enum ODS_BADGE_SHAPE {
  round = 'round',
  square = 'square',
}

type OdsBadgeShape =`${ODS_BADGE_SHAPE}`;

const ODS_BADGE_SHAPES = Object.freeze(Object.values(ODS_BADGE_SHAPE));

export {
  ODS_BADGE_SHAPE,
  ODS_BADGE_SHAPES,
  type OdsBadgeShape,
};
