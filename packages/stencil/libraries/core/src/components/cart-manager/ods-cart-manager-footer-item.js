/**
 * type guard of OdsCartFooterItem that check at runtime the object
 * @param footerItem - an object possibly of OdsCartFooterItem type
 */
export function isOdsCartManagerFooterItem(footerItem) {
  return !!footerItem && !!footerItem.title && typeof footerItem.title === 'string';
}
