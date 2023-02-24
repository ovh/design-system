import { isOdsCartManagerFooterItem } from './ods-cart-manager-footer-item';
import { isOdsCartTotal } from './ods-cart-manager-total';
/**
 * type guard of OdsCartFooter that check at runtime the object
 * @param footer - object possibly of OdsCartFooter type
 */
export function isOdsCartManagerFooter(footer) {
  return !!footer
    && !!footer.items
    && Array.isArray((footer.items))
    && footer.items.every(item => isOdsCartManagerFooterItem(item) || isOdsCartTotal(item));
}
