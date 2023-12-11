enum ODS_CART_ROUNDED {
  /** all borders are rounded */
  all = 'all',
  /** no border rounded */
  none = 'none',
  /** only the left and right border top are rounded */
  top = 'top'
}

const ODS_CART_ROUNDEDS = Object.freeze(Object.values(ODS_CART_ROUNDED));

export {
  ODS_CART_ROUNDED,
  ODS_CART_ROUNDEDS,
};
