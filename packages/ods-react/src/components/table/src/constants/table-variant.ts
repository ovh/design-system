enum TABLE_VARIANT {
  default = 'default',
  striped = 'striped',
}

type TableVariant =`${TABLE_VARIANT}`;

const TABLE_VARIANTS = Object.freeze(Object.values(TABLE_VARIANT));

export {
  TABLE_VARIANT,
  TABLE_VARIANTS,
  type TableVariant,
};
