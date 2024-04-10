enum ODS_TAG_SHAPE {
  round = 'round',
  square = 'square',
}

type OdsTagShape =`${ODS_TAG_SHAPE}`;

const ODS_TAG_SHAPES = Object.freeze(Object.values(ODS_TAG_SHAPE));

export {
  ODS_TAG_SHAPE,
  ODS_TAG_SHAPES,
  type OdsTagShape,
};
