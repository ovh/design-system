/**
 * @deprecated
 * Use the `striped` prop of the Table instead, removed in v21.
 */
enum TABLE_VARIANT {
  default = 'default',
  striped = 'striped',
}

/**
 * @deprecated
 * Use the `striped` prop of the Table instead, removed in v21.
 */
type TableVariant =`${TABLE_VARIANT}`;

/**
 * @deprecated
 * Use the `striped` prop of the Table instead, removed in v21.
 */
const TABLE_VARIANTS = Object.freeze(Object.values(TABLE_VARIANT));

export {
  TABLE_VARIANT,
  TABLE_VARIANTS,
  type TableVariant,
};
