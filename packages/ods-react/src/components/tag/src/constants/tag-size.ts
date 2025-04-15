enum TAG_SIZE {
  lg = 'lg',
  md = 'md',
}

type TagSize = `${TAG_SIZE}`;

const TAG_SIZES = Object.freeze(Object.values(TAG_SIZE));

export {
  TAG_SIZE,
  TAG_SIZES,
  type TagSize,
};
