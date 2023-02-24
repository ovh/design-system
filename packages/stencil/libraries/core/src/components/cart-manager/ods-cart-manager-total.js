/**
 * type guard of OdsCartTotal that check at runtime the object
 * @param cartTotal - object possibly of OdsCartTotal type
 */
export function isOdsCartTotal(cartTotal) {
  return !!cartTotal && !!cartTotal.total && typeof cartTotal.total === 'string';
}
