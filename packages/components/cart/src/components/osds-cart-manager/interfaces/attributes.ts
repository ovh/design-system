import type { OdsI18nHook, ODS_PERIOD_ISO_CODE } from '@ovhcloud/ods-common-core';
import type { ODS_CART_SIZE } from '../../osds-cart/constants/cart-size';

interface OdsCartManagerFooterItem {
  /** extra information */
  extra?: string;
  /** amount without VAT included */
  price: number;
  /** complementary information */
  subhead?: string;
  title: string;
  /** VAT amount */
  vat?: number;
}

interface OdsCartManagerTotal {
  /** extra information */
  extra?: string;
  /** complementary information */
  info?: string;
  /** price to display excluding VAT */
  price?: number;
  /** total amount to display */
  total: string;
  /** amount of the VAT */
  vat?: number;
}

interface OdsCartManagerFooter {
  items: (OdsCartManagerFooterItem | OdsCartManagerTotal)[]
}

interface OdsCartManagerItem {
  extra?: string;
  price: number; // TODO maybe ?
  /** is considered as a product or not */
  product?: boolean;
  subhead?: string;
  title: string;
  vat?: number;
}

interface OdsCartManagerSection {
  item: OdsCartManagerItem;
  options: OdsCartManagerItem[];
}

interface OdsCartManagerAttribute {
  /** describe what the footer is made of */
  footer?: OdsCartManagerFooter;
  /** internationalisation system connector */
  i18n?: OdsI18nHook;
  /** full width or not: see component principles */
  inline?: boolean;
  /** ISO period code that describe the duration of a periodical payment */
  period?: ODS_PERIOD_ISO_CODE;
  /** Sections made of one item and multiple options */
  sections: OdsCartManagerSection[];
  /** size: see component principles */
  size?: ODS_CART_SIZE;
  /** is the cart display the Value Added Tax */
  vatMode?: boolean;
}

export {
  OdsCartManagerAttribute,
  OdsCartManagerFooter,
  OdsCartManagerFooterItem,
  OdsCartManagerItem,
  OdsCartManagerSection,
  OdsCartManagerTotal,
};
