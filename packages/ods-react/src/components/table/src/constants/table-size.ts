enum TABLE_SIZE {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
}

type TableSize =`${TABLE_SIZE}`;

const TABLE_SIZES = Object.freeze(Object.values(TABLE_SIZE));

export {
  TABLE_SIZE,
  TABLE_SIZES,
  type TableSize,
};
