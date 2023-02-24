import { Unknown } from '../../types/unknown';
import { isOdsCartManagerFooterItem, OdsCartManagerFooterItem } from './ods-cart-manager-footer-item';
import { isOdsCartTotal, OdsCartManagerTotal } from './ods-cart-manager-total';

/**
 * the footer is an object made of `items` property which is an array of items.
 * Each item can be a `OdsCartManagerFooterItem` or `OdsCartManagerTotal`.
 * @Example
 * ```typescript
 * const footer: OdsCartManagerFooter = {
 *     items: [
 *       {subhead: 'subhead', title: 'my footer item', price: 3.15, extra: 'extra', vat: 0.52},
 *       {total: '9.99€', info: 'my grand total', price: 8.99, extra: 'extra', vat: 2}
 *     ]
 * }
 * ```
 */
export interface OdsCartManagerFooter {
  items: (OdsCartManagerFooterItem | OdsCartManagerTotal)[]
}

/**
 * type guard of OdsCartFooter that check at runtime the object
 * @param footer - object possibly of OdsCartFooter type
 */
export function isOdsCartManagerFooter(footer?: Unknown<OdsCartManagerFooter>): footer is OdsCartManagerFooter {
  return !!footer
    && !!footer.items
    && Array.isArray((footer.items))
    && footer.items.every(item => isOdsCartManagerFooterItem(item) || isOdsCartTotal(item));
}

