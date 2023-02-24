import { Unknown } from '../../types/unknown';

export interface OdsCartManagerFooterItem {
  /** complementary information */
  subhead?: string;
  title: string;
  /** amount without VAT included */
  price: number;
  /** extra information */
  extra?: string;
  /** VAT amount */
  vat?: number;
}

/**
 * type guard of OdsCartFooterItem that check at runtime the object
 * @param footerItem - an object possibly of OdsCartFooterItem type
 */
export function isOdsCartManagerFooterItem(footerItem?: Unknown<OdsCartManagerFooterItem>): footerItem is OdsCartManagerFooterItem {
  return !!footerItem && !!footerItem.title && typeof footerItem.title === 'string';
}
